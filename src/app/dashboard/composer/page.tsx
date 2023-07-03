'use client'
import SideBar from "components/sidebars/composer.sidebar";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
import skillset from "_mock/skillset";
import agents from "_mock/agent";
import bar1 from "_mock/bar1";



export default function Dashboard() {

    return (
        <div className="w-full h-max-screen h-min-screen h-screen dark:bg-background-primary-dark bg-white grid grid-cols-12   gap-0 ">
            <div className="col-span-2">
                <SideBar />
            </div>
            <div className="col-span-10">

            </div>

        </div>
    )

}