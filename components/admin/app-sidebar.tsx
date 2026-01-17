"use client"

import * as React from "react"
import {
  Command,
  FileText,
  Form,
  LayoutDashboard,
  Send,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/admin/nav-main"
import { NavSecondary } from "@/components/admin/nav-secondary"
import { NavUser } from "@/components/admin/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useUser } from "@clerk/nextjs"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Faculty",
      url: "/admin/faculty",
      icon: Users,
    },
    {
      title: "Posts",
      url: "/admin/posts",
      icon: FileText,
    },
    {
      title: "Forms",
      url: "/admin/form",
      icon: Form,
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "mailto:amardeep.devs@gmail.com",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser()
  const userdata = {
    name: user?.fullName || "admin",
    email: user?.emailAddresses[0].emailAddress || "admin@amardeep.space",
    avatar: user?.imageUrl || "",
  }
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Swami Vivekananda</span>
                  <span className="truncate text-xs">Govt College, Dalauda</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userdata} />
      </SidebarFooter>
    </Sidebar>
  )
}
