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
            <TableHead className="text-left"  >Task</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Priority</TableHead>
            <TableHead className="text-center">Due Date</TableHead>
            <TableHead className="text-right" >Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left"  >Task1</TableCell>
            <TableCell className="text-center">Not Started</TableCell>
            <TableCell className="text-center">High</TableCell>
            <TableCell className="text-center">21/05/2026</TableCell>
            <TableCell className="text-right" >Stuff</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
