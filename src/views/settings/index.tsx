import { Separator } from "components/ui/separator";
import { useState, useMemo } from "react";
import { SubSideBar } from "components/sidebars/sub.sidebar";
import { IViewComponent } from "lib/types/view.types";
import ViewFactory from "lib/factory/view.factory";

const sidebarNavs = [
    {
        nav_id: "subsidebar_settings_nav_0",
        nav_title: "Profile",
        nav_view: "profile"
    },
    {
        nav_id: "subsidebar_settings_nav_1",
        nav_title: "Organization",
        nav_view: "organization"
    }
];

const Settings:IViewComponent = ({  }) => {

    const [view, setView] = useState("profile");


    const View = useMemo(() =>  ViewFactory.createView(view).getView(),[view]);

    return (
        <>

            <div className="hidden  p-5 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                    <p className="text-muted-foreground">
                        Manage your account settings.
                    </p>
                </div>
                <Separator className="my-6 dark:bg-gray-700" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/6">
                        <SubSideBar  
                            navs={sidebarNavs} 
                            setView={setView}
                            view={view}
                        />
                    </aside>
                    <div className="flex-1 lg:w-5/6">
                       <View
                            setView={setView}
                            view={view}
                       />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Settings