import { FC } from "react";

interface Props {
    table_id: string,
    caption: string;
    tableHead: Array<string>,
    data: Array<any>
}


const Main: FC<Props> = ({
    table_id,
    caption,
    tableHead,
    data
}) => {

    return (
        <section className="relative h-full dark:bg-[#424242] ">

            <div className="relative mx-auto  min-h-full h-full overflow-auto max-h-full border-2 dark:border-gray-800 dark:bg-[#424242] ">
                <div className="relative overflow-hidden rounded-md h-full  dark:bg-[#424242]">

                    <div className="overflow-x-auto h-full dark:bg-[#424242]">
                        <table className="w-full text-sm text-left text-gray-500  h-full  border-2 dark:border-gray-800 p-0 ">
                            <thead className="text-xs text-gray-700 bg-gray-200 uppercase bg-gray-50 shadow-4xl border-b-2 border-[#1f77b4] dark:bg-[#424242] dark:text-white">

                                <tr>
                                    <th scope="col" className="px-4 py-3 text-center ">
                                        Agent
                                    </th>
                                    {
                                        tableHead.slice(3, tableHead.length).map((col, index) =>
                                            <th key={table_id + "_head_" + index} scope="col" className="px-4 py-3 text-center">
                                                {col}
                                            </th>
                                        )
                                    }

                                </tr>
                            </thead>
                            <tbody className="dark:bg-[#424242] dark:text-white">
                                {
                                    data.map((row, rowIndex) =>
                                        <tr key={table_id + "_row_" + rowIndex} className="border-b-2 dark:border-gray-800 ">
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap flex items-center  dark:bg-[#424242] dark:text-white" >
                                                <img src={row.agent_avatar} className="w-10 h-10 rounded-xl mr-2" /> <span>{row["Agt First Name"]} {row["Agt Last Name"]}</span>
                                            </td>
                                            {
                                                tableHead.slice(3, tableHead.length).map((cell, cellIndex) =>
                                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-center  dark:border-gray-800 dark:bg-[#424242] dark:text-white" key={table_id + "_cell_" + rowIndex + cellIndex}>{row[cell]}</td>

                                                )
                                            }
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;