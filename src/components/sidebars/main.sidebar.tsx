"use client"
import { useCallback, FC } from 'react';
import { cn } from 'lib/utils';
import { Icons } from "components/icons";
import { useTheme } from "next-themes";

interface Props {
  isExpanded: boolean;
  toggleSideBar: () => void;
  setView: (a:string) => void;
}

const  Sidebar:FC<Props> = ({
  isExpanded,
  toggleSideBar
}) => {


  const { setTheme, theme } = useTheme()

  

  const toggleTheme = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);

  return (
    <aside className={cn(
      "w-60 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-background-primary-dark dark:bg-background-primary-dark",
      isExpanded ? " -translate-x-none" : " -translate-x-48"
    )} >

      <div className={cn(
        "max-toolbar  w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-black bg-background-primary-dark dark:bg-background-primary-dark  absolute top-2 rounded-full h-12",
        isExpanded ? "translate-x-0" : "translate-x-24 scale-x-0"
      )} >

        <div className="flex pl-4 items-center space-x-2 ">
          <div>

            <div onClick={toggleTheme} className={cn(
              "moon text-white hover:text-white dark:hover:text-white cursor-pointer",
              theme === "dark" ? "block" : "hidden"
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </div>
            <div onClick={toggleTheme} className={cn(
              "moon text-white hover:text-white dark:hover:text-white cursor-pointer",
              theme === "dark" ? "hidden" : "block"
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
          </div >
          <div className="text-white hover:text-white dark:hover:text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500  pl-10 pr-2 py-1 rounded-full text-white  ">
          <div className="transform ease-in-out duration-300 mr-12 ">
            ARTELCO
          </div>
        </div>
      </div>
      <div onClick={toggleSideBar} className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-black cursor-pointer bg-background-primary-dark dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      </div>
      <div className={cn(
        "max  text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]",
        isExpanded ? "flex" : "hidden"
      )} >
        <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-white bg-background-primary-dark p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer">
          <Icons.home />
          <div>
            Home
          </div>
        </div>
        <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-white bg-background-primary-dark p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer">
          <Icons.pie />
          <div>
            Dashboards
          </div>
        </div>
        <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-white bg-background-primary-dark p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer">
          <Icons.chart />
          <div>
            Reports
          </div>
        </div>
        <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-white bg-background-primary-dark p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer">
          <Icons.billing />
          <div>
            Billing
          </div>
        </div>
        <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-white bg-background-primary-dark p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer">
          <Icons.settings />
          <div>
            Settings
          </div>
        </div>
      </div>
      <div className={cn(
        "mini mt-20  flex-col space-y-2 w-full h-[calc(100vh)]",
        isExpanded ? "hidden" : "flex"
      )}>
        <div className="hover:ml-4 justify-end pr-3 text-white hover:text-white dark:hover:text-white w-full bg-background-primary-dark p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
          <Icons.home
            size={20}
          />
        </div>
        <div className="hover:ml-4 justify-end pr-3 text-white hover:text-white dark:hover:text-white w-full bg-background-primary-dark p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
          <Icons.pie
            size={20} />
        </div>
        <div className="hover:ml-4 justify-end pr-3 text-white hover:text-white dark:hover:text-white w-full bg-background-primary-dark p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
          <Icons.chart
            size={20} />
        </div>
        <div className="hover:ml-4 justify-end pr-3 text-white hover:text-white dark:hover:text-white w-full bg-background-primary-dark p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
          <Icons.billing
            size={20} />
        </div>
        <div className="hover:ml-4 justify-end pr-3 text-white hover:text-white dark:hover:text-white w-full bg-background-primary-dark p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
          <Icons.settings
            size={20} />
        </div>
      </div>
    </aside>
  )
}


export default Sidebar;