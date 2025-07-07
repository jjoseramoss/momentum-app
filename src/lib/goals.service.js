import { supabase } from "./supabaseClient";


//async function to get data
export const getGoals = async () => {
    //query data
    const { data, error } = await supabase.from("goals").select("*"); // select all columns

    if (error) {
    console.error("Error fetching data: ", error);
    } 

    return data;
}


export const addGoal = async (goalText, due_date, priority, userId) => {

    const { data, error } = await supabase
        .from("goals")
        .insert([{ text: goalText, completed: false, due: due_date, priority: priority, user_id: userId }])
        .select(); // tells supabase to return the row that was just created

    if (error) {
        console.error("Error adding goal", error);
        return null;
    } else if (data) {
        //supabase returns the new row in an array. we add the first item of that array to our local state so that UI updates instantly
        return data[0];
    }
};

export const deleteGoal = async (id) => {
    const { error } = await supabase.from("goals").delete().eq("id", id); // where the id column matches the id we passed in

    if (error) {
        console.log("Error deleting goal", error);
        return false;
    } else {
        return true;
    }
};

export const toggleComplete =  async (id, goals) => {

    const goalToToggle = goals.find(goal => goal.id === id);

    // if we cant find goal, exit function
    if(!goalToToggle) return null;

    const { error } = await supabase
    .from('goals')
    .update({ completed: !goalToToggle.completed})
    .eq('id', id);

    if(error){
      console.error("Error updating goal", error)
      return null;
    } else{
      return goalToToggle;
    }
};