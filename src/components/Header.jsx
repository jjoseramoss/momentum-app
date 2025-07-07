import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import AddGoalForm from "./AddGoalForm";
import { add } from "date-fns";

function Header( {addGoal, onSignOut, userEmail}) {
  return (
    <header className="bg-dark sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
      <h1 className="text-5xl font-doto">Momentum</h1>
      

      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded transition">
          New Goal
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create a Goal!</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <AddGoalForm 
            addGoal={addGoal}
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">{userEmail}</span>
        <button
          onClick={onSignOut}
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 transition-colors"
        >Sign Out</button>
      </div>

    </header>
  );
}

export default Header;
