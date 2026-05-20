"use client"
import { NavBar } from "@/components/shared/app-navbar"
import { HiddenTrigger } from "@/components/shared/app-sidebar-trigger"


export function PageHeader() {
  return (
    <header className="flex justify-between sticky top-0 w-full mb-4">
      <div className="flex items-center">
        <HiddenTrigger />
        <div className="text-xl px-2">Project Alpha</div>
      </div>
      <NavBar />
    </header>
  )
}
