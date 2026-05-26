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
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"

export function CreateTask({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle className="font-bold">Create Task</SheetTitle>
        </SheetHeader>
        <form>
          <FieldSet>
            <div className="grid flex-1 auto-rows-min gap-6 px-6">
              <Field className="gap-0">
                <Label htmlFor="task">Task Name</Label>
                <Input id="task" placeholder="Fix the bug" />
              </Field>
              <Field className="gap-0">
                <Label htmlFor="Status">Status</Label>
                <Select name="Status">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="idle" className="cursor-pointer">Not Started</SelectItem>
                      <SelectItem value="progress" className="cursor-pointer">In Progress</SelectItem>
                      <SelectItem value="done" className="cursor-pointer">Done</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="gap-0">
                <Label htmlFor="Priority">Priority</Label>
                <Select name="Priority">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="light" className="cursor-pointer">High</SelectItem>
                      <SelectItem value="dark" className="cursor-pointer">Mid</SelectItem>
                      <SelectItem value="system" className="cursor-pointer">Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="gap-0">
                <Label htmlFor="due date">Due Date</Label>
                <DatePicker />
              </Field>
              <Field className="gap-0">
                <Label htmlFor="Desc">Description</Label>
                <Textarea id="Desc" placeholder="Type your Description here." />
              </Field>
            </div>
          </FieldSet>
        </form>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent >
    </Sheet >
  )
}
