"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "../ui/separator"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Plus, ChevronDown, Ellipsis, LogOut, Settings, Star } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-between items-center gap-2 w-full">
          <span className="font-medium text-xl">Project Manager</span>
          <SidebarTrigger className="cursor-w-resize" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem className="px-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild >
                <SidebarMenuButton className="mt-1" >
                  Default Workspace
                  <Ellipsis className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Default Workspace</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Personal Workspace</span>
                </DropdownMenuItem>
                <Separator className="my-1" />
                <DropdownMenuItem className="cursor-pointer">
                  <Plus />
                  <span>Add Workspace</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="py-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Favorites
                <ChevronDown className="ml-auto transition-transform group-data-[state=closed]/collapsible:rotate-90 opacity-0 group-hover/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <SidebarGroupContent />
            <CollapsibleContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="py-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Recent
                <ChevronDown className="ml-auto transition-transform group-data-[state=closed]/collapsible:rotate-90 opacity-0 group-hover/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="py-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Projects
                <ChevronDown className="ml-auto transition-transform group-data-[state=closed]/collapsible:rotate-90 opacity-0 group-hover/collapsible:opacity-100" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="pl-1 border-l border-border ml-4 pr-8">
                  {["Project Alpha", "Project Beta", "Project Gamma", "Project Delta"].map((project) => (
                    <SidebarMenuItem key={project} >
                      <SidebarMenuButton type="button" className="group/button">
                        <div className="w-full items-center flex justify-between ">
                          <span>{project}</span>
                          <Star className="opacity-0 transition-opacity group-hover/button:opacity-100" />
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup className="py-0">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton type="button" className="justify-center py-0">
                <Plus />
                <span>Add Project</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className=" px-1">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-6 px-1">
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarFallback>
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-muted-foreground">john@example.com</span>
                  </div>
                  <Ellipsis className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings />
                  <span>settings</span>
                </DropdownMenuItem>
                <Separator className="my-1" />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut />
                  <span>logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
