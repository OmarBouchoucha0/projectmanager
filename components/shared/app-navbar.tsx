import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Ellipsis, Share, Star } from "lucide-react"

export function NavBar() {
  const navItems = [
    {
      icon:
        <Tooltip>
          <TooltipTrigger asChild>
            <Share />
          </TooltipTrigger>
          <TooltipContent>
            <p>Export</p>
          </TooltipContent>
        </Tooltip>,
      content: null,
    },
    {
      icon:
        <Tooltip>
          <TooltipTrigger asChild>
            <Star />
          </TooltipTrigger>
          <TooltipContent>
            <p>Favorite</p>
          </TooltipContent>
        </Tooltip>,
      content: null,
    },
    {
      icon:
        <Tooltip>
          <TooltipTrigger asChild>
            <Ellipsis />
          </TooltipTrigger>
          <TooltipContent >
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>,
      content: (
        <MenubarContent align="end">
          <MenubarItem >Link</MenubarItem>
        </MenubarContent>
      ),
    },
  ]

  return (
    <Menubar className="pr-2 border-none">
      {navItems.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="h-8 w-8 items-center flex justify-center">
            {item.icon}
          </MenubarTrigger>
          {item.content}
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
