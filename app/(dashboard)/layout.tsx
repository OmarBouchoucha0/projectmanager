import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/app-sidebar"
import { HiddenTrigger } from "@/components/shared/app-sidebar-trigger"



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <HiddenTrigger />
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}
