import { Separator } from "components/ui/sperator";
import { useState, useMemo } from "react";
import { SidebarNav } from "components/sidebars/settings.sidebar";
import { IViewComponent } from "lib/types/view.types";
import ViewFactory from "lib/factory/view.factory";

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/examples/forms",
    },
    {
        title: "Organization",
        href: "/examples/forms/account",
    }
]
const Settings:IViewComponent = ({  }) => {

    const [view, setView] = useState("organization");


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
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:w-3/5">
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