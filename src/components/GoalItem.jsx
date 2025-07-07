import { TableRow, TableCell } from "@/components/ui/table";
import Checkbox from "./Checkbox";
import { X } from "lucide-react"

const GoalItem = ({ goal, deleteGoal, isComplete }) => {
  return (
    <TableRow key={goal.id}>
      {/**Status (checkbox)*/}
      <TableCell className="flex items-center justify-center">
        <Checkbox
          isComplete={() => isComplete(goal.id)}
          checked={goal.completed}
          id={`tick-${goal.id}`}

        />
      </TableCell>
      {/**Input Text*/}
      <TableCell>{goal.text}</TableCell>

      {/**Priority */}
      <TableCell
        className={
          goal.priority === "Low"
            ? "text-green-400"
            : goal.priority === "Medium"
            ? "text-yellow-200"
            : "text-red-600"
        }
      >
        {goal.priority}
      </TableCell>
      {/**Due Date */}
      <TableCell>
        {goal.due ? (
          (() => {
            const [year, month, day] = goal.due.split("-");
            const localDate = new Date(year, month - 1, day);
            return localDate.toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
          })()
        ) : (
          <span className="text-gray-400 italic">None</span>
        )}
      </TableCell>

      {/**Actions */}
      <TableCell>
        <button
          onClick={() => deleteGoal(goal.id)}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 hover:bg-red-700"
          aria-label="Delete Goal"
        >
          <X className="h-4 w-4"/>
        </button>
      </TableCell>
    </TableRow>
  );
};

export default GoalItem;
