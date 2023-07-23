'use client'
import SideBar from "components/sidebars/composer.sidebar";
import GridLayout from "react-grid-layout";
import skillset from "_mock/skillset";
import agents from "_mock/agent";
import bar1 from "_mock/bar1";
import { useRef } from "react";



export default function Dashboard() {
    const sidebar = useRef(null)
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];

    console.log(sidebar.current)
    return (
        <div className="w-full h-max-screen h-min-screen h-screen dark:bg-background-primary-dark bg-white grid grid-cols-12   gap-0 ">
            <div className="col-span-2" ref={sidebar}>
                <SideBar />
            </div>
            <div className="col-span-10">
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={3}
                    rowHeight={30}
                    width={1200}
                >
                    <div key="a">a</div>
                    <div key="b">b</div>
                    <div key="c">c</div>
                </GridLayout>
            </div>

        </div>
    )

}