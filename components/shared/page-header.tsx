"use client"
import { NavBar } from "@/components/shared/app-navbar"
import { HiddenTrigger } from "@/components/shared/app-sidebar-trigger"
import {
  useSidebar,
} from "@/components/ui/sidebar"


export function PageHeader() {
  const { open } = useSidebar()
  return (
    <header className="flex justify-between sticky top-0 w-full">
      <div className="flex items-center">
        <HiddenTrigger />
        {!open && <div className="text-xl">Project Alpha</div>}
      </div>
      <NavBar />
    </header>
  )
}
