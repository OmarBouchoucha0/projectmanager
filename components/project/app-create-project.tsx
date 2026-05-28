import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Field,
  FieldSet,
} from "@/components/ui/field"
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function CreateProject({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Create Project</DialogTitle>
      </DialogHeader>
      <FieldSet>
        <Field className="gap-0 py-6">
          <Label htmlFor="workspace">Project Name</Label>
          <Input id="workspace" placeholder="Project One" />
        </Field>
      </FieldSet>
      <DialogFooter className="flex flex-row justify-between items-center">
        <Button className="w-full">
          Save
        </Button>
      </DialogFooter>
    </form>
  )
}
