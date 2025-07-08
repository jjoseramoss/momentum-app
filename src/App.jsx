import React, { useState, useEffect } from "react";
import { getGoals, addGoal, deleteGoal, toggleComplete } from "./lib/goals.service.js";
import Header from "./components/Header";
import AddGoalForm from "./components/AddGoalForm.jsx";
import GoalList from "./components/GoalList.jsx";
import { Toaster } from "@/components/ui/sonner"
import LoginPage from './pages/LoginPage'; // Import your new page
import { supabase } from './lib/supabaseClient'; // Adjust path if needed



const App = () => {
  const [goals, setGoals] = useState([]);
  const [session, setSession] = useState(null);

  useEffect(() => {
    //Check for an existing session when app loads
    supabase.auth.getSession().then(({ data: { session }}) => {
      setSession(session);
    })

    //Listen for auth state changes (user logs in or out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();



  }, []); // Empty array means this effect runs only once on mount

  useEffect(() => {
    // Fetch goals once session exists
    if(session) {
    
    // Call the function
    const fetchInitialGoals = async () => {
      const initialGoals = await getGoals();
      setGoals(initialGoals);
    }

    fetchInitialGoals();
    }
  }, [session])

  const handleAddGoal = async (goalText, due_date, priority) => {

    const userId = session.user.id;
    const newGoalFromDB = await addGoal(goalText, due_date, priority, userId);

    if(newGoalFromDB){
      setGoals([...goals, newGoalFromDB]);
    }
    
  }

  const handleDeleteGoal = async (id) => {
    const goalDeletedFromDB = await deleteGoal(id);

    if(goalDeletedFromDB){
      setGoals(goals.filter((goal) => goal.id !== id));
    }
  }

  const handleToggleComplete = async (id) => {
    const goalToToggle = await toggleComplete(id, goals);

    if(goalToToggle){
      setGoals(
        goals.map(goal => 
          goal.id === id 
          ? { ...goal, completed: !goalToToggle.completed}
          : goal
        )
    );
    }
  }

  const handleSignOut = async () => {
    //Tell supabase to sign the user out
    const { error } = await supabase.auth.signOut();

    if (error){
      console.log('Error signing out:', error);
    }

  }

  if(!session){
    return <LoginPage />
  } else{

  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center">
      <Header 
      addGoal={handleAddGoal}
      onSignOut={handleSignOut}
      userEmail={session.user.email}
      />
        <main className="mx-auto max-w-5xl py-8">
          <GoalList
            goals={goals}
            deleteGoal={handleDeleteGoal}
            isComplete={handleToggleComplete}
          />
        </main>
        <Toaster />

        <h1>Welcome, {session.user.email}</h1>
      
    
    </div>
  );
};

export default App;
