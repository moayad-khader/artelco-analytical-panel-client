import type { NextPage } from "next";
import { Clock, PhoneCall } from "lucide-react";
import MainTable from "components/tables";
import AgentTable from "components/tables/agentTable";
import Billboard from "components/billboards";
import Chart from "components/charts";
import skillset from "_mock/skillset";
import agents from "_mock/agent";
import bar1 from "_mock/bar1";



export default function Dashboard() {

    

    return (
        <div className="w-full h-max-screen h-min-screen h-screen dark:bg-black bg-white grid grid-rows-1 grid-cols-12 grid-flow-col gap-1 p-2">
            <div className="col-span-7  grid grid-rows-2 gap-2">
                <div className="h-full w-full ">
                  
                    <MainTable
                        caption="CCMS Standard Skillset Display *"
                        tableHead={Object.keys(skillset[0])}
                        data={skillset}
                        table_id="skillset_table"
                    />
                </div>
                <div className=" ">
                    <AgentTable
                        caption=""
                        tableHead={Object.keys(agents[0])}
                        data={agents}
                        table_id="agent_table"
                    />
                </div>
            </div>
            <div className="col-span-5  grid grid-rows-5 gap-1">
                <div className=" h-full ">
                    <div className="grid grid-cols-2 gap-1  h-full">
                        <Billboard
                            title="Waiting"
                            icon={Clock}
                            subtitle="1"
                        />
                        <Billboard
                            title="Incoming Calls"
                            icon={PhoneCall}
                            subtitle="2"
                        />
                    </div>
                </div>
                <div className="row-span-2 ">
                    <Chart
                        chart_type="bar"
                        title="test1"
                        details={bar1}
                    />
                </div>
                <div className="row-span-2">
                    <Chart
                        chart_type="area"
                        title="test1"
                        details={skillset.map(a =>{
                            return{
                                skillset: a.Skillset,
                                "AVG ANS DLY": a["Avg Ans Dly"]
                            }
                        })}
                    />
                </div>
            </div>
        </div>
    )

}