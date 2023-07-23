
"use client";
import "app/globals.css";
import { useMemo } from "react";
import ViewFactory from "lib/factory/view.factory";
import SideBar from "components/sidebars/main.sidebar";
import Header from "components/headers/main.header";
import { cn } from "lib/utils";
import { useState, useCallback } from 'react';


export default function Home() {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [view, setView] = useState<string>("home");

    const toggleSideBar = useCallback(() => setIsExpanded(prev => !prev), [setIsExpanded]);

    const View = useMemo(() => ViewFactory.createView(view).getView() , [view]);

    return (
        <div className="w-full h-max-screen h-min-screen h-screen dark:bg-black bg-white ">
            <Header
                isExpanded={isExpanded}
                setView={setView}
            />
            <SideBar
                isExpanded={isExpanded}
                toggleSideBar={toggleSideBar}
                setView = {setView}
                view={view}
            />
            <div className={cn(
                " content transform ease-in-out duration-500 pt-20 px-8 md:px-8 pb-4",
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
