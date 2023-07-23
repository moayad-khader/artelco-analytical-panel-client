"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "lib/utils"
import { buttonVariants } from "components/ui/button"
import { useCallback } from "react"

interface Props extends React.HTMLAttributes<HTMLElement> {
  setView: (a:string) => void;
  view: string;
  navs: {
    nav_id: string,
    nav_view: string
    nav_title: string
  }[];
}

export function SubSideBar({ 
  view,
  setView,
  className, 
  navs, 
  ...props 
}: Props) {

  const switchViewHandler = useCallback(setView,[setView]);
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {navs.map((nav) => (
        <span
          key={nav.nav_id}
          onClick={() => switchViewHandler(nav.nav_view)}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            view === nav.nav_view
              ? "bg-muted text-primary dark:bg-gray-900"
              : "hover:bg-transparent ",
            "justify-start cursor-pointer dark:hover:bg-gray-800"
          )}
        >
          {nav.nav_title}
        </span>
      ))}
    </nav>
  )
}