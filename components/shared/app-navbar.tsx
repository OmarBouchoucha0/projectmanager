import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Ellipsis, Share, Star } from "lucide-react"

export function NavBar() {
  const navItems = [
    {
      icon: <Share className="h-5 w-5" />,
      content: (
        <NavigationMenuContent className="left-auto right-0">
          <NavigationMenuLink>private</NavigationMenuLink>
          <NavigationMenuLink>public</NavigationMenuLink>
        </NavigationMenuContent>
      ),
    },
    {
      icon: <Star className="h-5 w-5" />,
      content: null,
    },
    {
      icon: <Ellipsis className="h-5 w-5" />,
      content: (
        <NavigationMenuContent className="left-auto right-0">
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      ),
    },
  ]
  return (
    < NavigationMenu viewport={false} className="pr-1" >
      <NavigationMenuList>
        {navItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="[&_svg:last-child]:hidden h-8 w-8 p-0">
              {item.icon}
            </NavigationMenuTrigger>
            {item.content}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu >
  )
}
