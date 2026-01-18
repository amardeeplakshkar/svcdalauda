'use client'

import { AppSidebar } from "@/components/admin/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import AdminDashboard from "./AdminDashboard"
import { UserButton } from "@clerk/nextjs"

export default function AdminLayout({children}:{children: React.ReactNode}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center justify-between w-full gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <UserButton/>
          </div>
        </header>
        {
            children
        }
      </SidebarInset>
    </SidebarProvider>
  )
}
