import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, FileText, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/faculty", label: "Faculty", icon: Users },
    { href: "/admin/posts", label: "Posts", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-muted/20 flex">
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500 slide-in-from-bottom-4">
          {children}
        </div>
      </main>
    </div>
  );
}
