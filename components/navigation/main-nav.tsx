"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Users, Target, FileText, Settings, Smartphone, LogOut } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Manager", href: "/manager", icon: Users },
  { name: "Prospecting", href: "/prospecting", icon: Target },
  { name: "Proposals", href: "/proposals", icon: FileText },
  { name: "Mobile", href: "/mobile", icon: Smartphone },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function MainNav() {
  const pathname = usePathname()

  if (pathname === "/" || pathname?.startsWith("/auth")) {
    return null
  }

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4 z-50">
      <div className="flex items-center space-x-2 mb-8">
        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">VQ</span>
        </div>
        <span className="font-bold text-xl">VelocityIQ</span>
      </div>

      <div className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn("w-full justify-start", isActive && "bg-primary hover:bg-primary/90")}
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <Link href="/auth/login">
          <Button variant="ghost" className="w-full justify-start text-gray-600">
            <LogOut className="h-4 w-4 mr-3" />
            Sign Out
          </Button>
        </Link>
      </div>
    </nav>
  )
}
