import type { NextPage } from "next";
import MainTable from "components/tables";
import AgentTable from "components/tables/agentTable";
import skillset from "_mock/skillset";
import agents from "_mock/agent";


export default function Dashboard() {


    return (
        <div className="w-full h-max-screen h-min-screen h-screen bg-white grid grid-rows-1 grid-cols-12 grid-flow-col gap-0">
            <div className="col-span-7  grid grid-rows-2 gap-0">
                <div className="h-full w-full  p-2">
                    <MainTable
                        caption="CCMS Standard Skillset Display *"
                        tableHead={Object.keys(skillset[0])}
                        data = {skillset}
                        table_id="skillset_table"
                    />
                </div>
                <div className=" p-2">
                    <AgentTable
                        caption=""
                        tableHead={Object.keys(agents[0])}
                        data={agents}
                        table_id="agent_table"
                    />
                </div>
            </div>
            <div className="col-span-5  grid grid-rows-12 gap-0">
                <div className="bg-red-200 row-span-10 ">

                </div>
                <div className="bg-blue-200 row-span-2 ">

                </div>
               
            </div>
        </div>
    )

}