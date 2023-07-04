"use client";
import { FC, useMemo } from "react";
import { cn } from "lib/utils";
import { Icon as IconType } from "components/icons";

interface Props {
 title: string;
 Icon:IconType
}
const ModuleCard: FC<Props> = ({
    title,
    Icon
}) => {



    return (
        <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-cyan-500 to-blue-500 rounded-md p-3">
            <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">             
                <Icon
                    size={28}
                />
            </div>
            <div className="flex flex-col justify-around flex-grow ml-5 text-white">
               {title}
            </div>
            <div className=" flex items-center flex-none text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )

}

export default ModuleCard;