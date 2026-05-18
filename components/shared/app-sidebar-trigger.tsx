"use client"
import {
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar"


export function HiddenTrigger() {
  const { open } = useSidebar()
  if (open) return null

  return (
    <SidebarTrigger className="transition-opacity duration-300 ease-in-out cursor-e-resize" />
  )
}

