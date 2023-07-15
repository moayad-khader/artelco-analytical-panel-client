
"use client";
import "app/globals.css";
import { useMemo } from "react";
import ViewFactory from "lib/factory/view.factory";
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
    const [view, setView] = useState<string>("home");

    const toggleSideBar = useCallback(() => setIsExpanded(prev => !prev), [setIsExpanded]);

    const View = useMemo(() => ViewFactory.createView(view).getView() , [view]);

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
              <View
                view={view}
                setView={setView}
              />
            </div>
        </div>
    )
}
