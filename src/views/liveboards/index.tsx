import { Fragment, useMemo, useState } from "react";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import { SubSideBar } from "components/sidebars/sub.sidebar";
import { IViewComponent } from "lib/types/view.types";
import { Icons } from "components/icons";
import ViewFactory from "lib/factory/view.factory";

const sidebarNavs = [
    {
        nav_id: "subsidebar_liveboards_nav_0",
        nav_title: "Billboards",
        nav_view: "billboards"
    },
    {
        nav_id: "subsidebar_liveboards_nav_1",
        nav_title: "Charts",
        nav_view: "charts"
    },
    {
        nav_id: "subsidebar_liveboards_nav_2",
        nav_title: "Tables",
        nav_view: "tables"
    },
    {
        nav_id: "subsidebar_liveboards_nav_3",
        nav_title: "Formulas",
        nav_view: "formulas"
    },
    {
        nav_id: "subsidebar_liveboards_nav_4",
        nav_title: "Collections",
        nav_view: "collections"
    },
    {
        nav_id: "subsidebar_liveboards_nav_5",
        nav_title: "Presentations",
        nav_view: "presentations"
    }
]

const Liveboards: IViewComponent = ({

}) => {

    const [view, setView] = useState("billboards")
    const View = useMemo(() =>  ViewFactory.createView(view).getView(),[view]);

    return (
        <Fragment>
             <div className="hidden  p-5 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Liveboards</h2>
                    <p className="text-muted-foreground">
                        Create an interactive liveboards.
                    </p>
                </div>
                <Separator className="my-6 dark:bg-gray-700" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 w-full">
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
        </Fragment>
    )
}


export default Liveboards;