import type { NextPage } from "next";


export default function Dashboard() {


    return (
        <div className="w-full h-max-screen h-min-screen h-screen bg-white grid grid-rows-1 grid-cols-12 grid-flow-col gap-0">
            <div className="col-span-7  grid grid-rows-2 gap-0">
                <div className="bg-green-200 ">

                </div>
                <div className="bg-yellow-200 ">

                </div>
            </div>
            <div className="col-span-5  grid grid-rows-12 gap-0">
                <div className="bg-red-200 row-span-3 ">

                </div>
                <div className="bg-blue-200 row-span-6 ">

                </div>
                <div className="bg-pink-200 row-span-3 ">

                </div>
            </div>
        </div>
    )

}