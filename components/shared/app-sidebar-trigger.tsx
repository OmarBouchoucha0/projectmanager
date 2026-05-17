"use client"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function HiddenTrigger() {
  const { toggleSidebar, open } = useSidebar()
  if (open) return null

  return (
    <Button variant="ghost" size="icon" onClick={toggleSidebar} className="transition-opacity duration-300 ease-in-out">
      <Menu className="h-4 w-4" />
    </Button>
  )
}

