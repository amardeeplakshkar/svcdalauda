'use client'

import { cn } from "@/lib/utils";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/faculty", label: "Faculty" },
    { href: "/posts", label: "Blog & News" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground group-hover:bg-primary/90 transition-colors">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">AcademicCMS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                pathname === link.href 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent" 
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <Link href="/admin">
            <Button variant="outline" size="sm" className="font-semibold">
              Admin Portal
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                {links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      pathname === link.href ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-border w-full" />
                <Link href="/admin" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">Admin Portal</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
