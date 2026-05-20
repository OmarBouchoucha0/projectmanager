"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreateTask } from "@/components/task/app-create-task";

export function CreateTaskButton() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="flex justify-end">
        <Button variant="default" onClick={() => setOpen(true)}>New Task</Button>
      </div>
      <CreateTask open={open} onOpenChange={setOpen} />
    </div>
  )
}
