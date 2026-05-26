import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Ellipsis, Share, Star } from "lucide-react"

export function NavBar() {
  const navItems = [
    {
      icon: <Share />,
      content: null,
    },
    {
      icon: <Star />,
      content: null,
    },
    {
      icon: <Ellipsis />,
      content: (
        <MenubarContent align="end">
          <MenubarItem className="cursor-pointer">Link</MenubarItem>
        </MenubarContent>
      ),
    },
  ]

  return (
    <Menubar className="pr-2 border-none">
      {navItems.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="h-9 w-9 items-center flex justify-center">
            {item.icon}
          </MenubarTrigger>
          {item.content}
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
