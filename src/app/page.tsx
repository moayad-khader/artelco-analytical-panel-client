
"use client";
import "app/globals.css";
import SideBar from "components/sidebars/main.sidebar";
import Header from "components/headers/main.header";
import { cn } from "lib/utils";
import ModuleCard from "components/cards/module.card";
import {
    Icons
} from "components/icons";
import { useState, useCallback } from 'react';
import { Button } from "components/ui/button";

export default function Home() {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleSideBar = useCallback(() => setIsExpanded(prev => !prev), [setIsExpanded]);

    return (
        <div className="w-full h-max-screen h-min-screen h-screen dark:bg-black bg-white ">
            <Header
                isExpanded={isExpanded}
            />
            <SideBar
                isExpanded={isExpanded}
                toggleSideBar={toggleSideBar}
            />
            <div className={cn(
                " content transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4",
                isExpanded ? "ml-12 md:ml-60" : "ml-12"
            )} >
                  <div className="p-5 flex flex-wrap justify-between items-center border-b border-light dark:border-primary mb-6">
              <div className=" flex flex-col gap-3">
                <h1 className="text-white text-4xl font-bold capitalize">
                  Welcome Moayad Khader!
                </h1>
                <p className="capitalize">Start your journey here!</p>
              </div>
              <Button variant="outline">
                <Icons.message className="mr-2 h-4 w-4" />
                Leave Your Feedback
              </Button>
            </div>
                <div className="w-full grid grid-cols-2 gap-2">
                    <ModuleCard
                        title = "Dashboard"
                        Icon = {Icons.pie}
                    />
                     <ModuleCard
                        title = "Reports"
                        Icon = {Icons.chart}
                    />
                      <ModuleCard
                        title = "Billing"
                        Icon = {Icons.billing}
                    />
                </div>
            </div>
        </div>
    )
}
