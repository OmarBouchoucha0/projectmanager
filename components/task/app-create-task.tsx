import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/task/app-create-task-calander"
import { Textarea } from "@/components/ui/textarea"

export function CreateTask({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle className="font-bold">Create Task</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-2 px-6">
          <div className="grid gap-1">
            <Label htmlFor="task">Task Name</Label>
            <Input id="task" placeholder="Task Name" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="Status">Status</Label>
            <Select name="Status">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="light">Not Started</SelectItem>
                  <SelectItem value="dark">In Progress</SelectItem>
                  <SelectItem value="system">Done</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1">
            <Label htmlFor="Priority">Priority</Label>
            <Select name="Priority">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="light">High</SelectItem>
                  <SelectItem value="dark">Mid</SelectItem>
                  <SelectItem value="system">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1">
            <Label htmlFor="due date">Due Date</Label>
            <DatePicker />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="Desc">Description</Label>
            <Textarea id="Desc" placeholder="Type your Description here." />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
