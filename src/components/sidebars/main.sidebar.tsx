"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion"
import { Button, buttonVariants } from "components/ui/button"
import { ScrollArea } from "components/ui/scrollArea"
import { cn } from "lib/utils"
import { SidebarProps } from "types/sidebar.types";

import { Icons } from "components/icons";

export function Sidebar({ className, menus }: SidebarProps) {
  const pathname = usePathname()
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 pb-2">
        <div className="py-2">
          <ScrollArea className="min-h-[300px] max-h-screen px-2">
            <div className="space-y-1 p-2">
              <Link
                className={`${buttonVariants({
                  size: "sm",
                  variant: pathname === "/dashboard" ? "default" : "ghost",
                 
                })}`}
                href={"/dashboard"}
              >
                <span className="inline-flex items-center justify-center gap-1">
                  <Icons.home className="w-4 h-4" /> Dashboard
                </span>
              </Link>
              {menus?.map((menu, i) => {
                if (menu.isParent === false && menu.link === "javascript:;" && menu.icon === undefined) {
                  return <strong key={`${menu}-${i}`} className="font-bold inline-flex items-start justify-start text-xs text-gray-700 dark:text-gray-400">{menu.label}</strong>
                } else if (menu.isParent && menu.link !== "javascript::" && menu.icon !== undefined) {
                  return (
                    <Accordion
                      key={`${menu}-${i}`}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem value={`item-${i}`} className="border-b-0">
                        <AccordionTrigger
                          className={buttonVariants({
                            size: "sm",
                            variant:
                              pathname === menu.link ? "default" : "ghost",
                            className: "hover:no-underline",
                          })}
                        >
                          <span className="inline-flex items-center justify-center gap-1">
                            {menu.icon} {menu.label}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          {menu.subMenu?.map((subItem, subIndex) => (
                            <Button
                              key={`${subIndex}-${i}`}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start font-normal"
                            >
                              &mdash; {subItem.label}
                            </Button>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )
                } else {
                  return (
                    <Link
                      key={`${menu}-${i}`}
                      className={`${buttonVariants({
                        size: "sm",
                        variant: pathname === menu.link ? "default" : "ghost",
                      })}`}
                      href={menu.link}
                    >
                      <span className="inline-flex items-center justify-center gap-1">
                        {menu.icon} {menu.label}
                      </span>
                    </Link>
                  )
                }
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}