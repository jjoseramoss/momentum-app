import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns"
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { toast } from "sonner"
import { DialogClose } from "@/components/ui/dialog";

const AddGoalForm = ({ addGoal }) => {
  const [goal, setGoal] = useState("");
  const [date, setDate] = useState(new Date());
  const [priority, setPriority] = useState("");

  const MAX_CHAR_COUNT = 280;

  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(goal, date, priority);

    const DUE_DATE = date ? new Date(date).toLocaleDateString(undefined,
            {year: "numeric",
            month: "short",
            day: "numeric",}
          ) : "None";

    //Toast
    toast("Goal has been created!", {
      description: `${goal} due @ ${DUE_DATE}`
    })

    //empty state
    setGoal("");
    setPriority("");

    
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="goal-input">Goal</Label>
          <input
            id="goal-input"
            className="appearance-none bg-transparent border border-gray-500 rounded px-3 py-2 w-full text-black focus:outline-none"
            type="text"
            placeholder="Add a new Goal!"
            value={goal}
            onChange={handleChange}
          />
        </div>
        {/**Word Count */}
        <p className="text-right text-sm text-muted-foreground">{goal.length}/{MAX_CHAR_COUNT}</p>

        {goal.length > MAX_CHAR_COUNT && 
        (<p className="text-sm text-red-500">
          Goal must be {MAX_CHAR_COUNT} characters or less
        </p>)}


          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Select Priority Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Popover >
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[160px] justify-start text-left font-normal ",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4"/>
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              {/* Your working, interactive Calendar goes right here! */}
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

        {/**Add Button */}
        <DialogClose asChild>
          <div className="flex items-center justify-center py-2">
          <button
            className="flex-shrink-0 bg-teal-500 w-full hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white py-1 px-2 rounded"
            type="submit"
            disabled={goal.length === 0 || goal.length >= MAX_CHAR_COUNT}
          >
            Add
          </button>
        </div>
        </DialogClose>
      </form>
  );
};

export default AddGoalForm;
