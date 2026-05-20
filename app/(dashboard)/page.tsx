import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CreateTaskButton } from "@/components/task/app-create-task-button";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center w-full p-1">
        <div>
          <div className="font-semibold">TASK TRACKER</div>
          <div className="font-light">Stay organized with tasks, your way.</div>
        </div>
        <div className="justify-end">
          <CreateTaskButton />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Task1</TableCell>
            <TableCell>Not Started</TableCell>
            <TableCell>High</TableCell>
            <TableCell>21/05/2026</TableCell>
            <TableCell>Stuff</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
