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
        <section className="relative h-full dark:background-secondary-dark opacity-90">

            <div className="relative mx-auto  min-h-full h-full overflow-auto max-h-full   dark:bg-background-secondary-dark ">
                <div className="relative overflow-hidden rounded-lg h-full  dark:bg-background-secondary-dark">

                    <div className="overflow-x-auto h-full dark:bg-background-secondary-dark">
                        <table className="w-full text-sm text-left text-gray-500  h-full  border-2 dark:border-dark border-light p-0 ">
                            <thead className="text-xs text-gray-700 uppercase  shadow-4xl border-b-2 border-primary dark:bg-background-secondary-dark bg-primary text-white">

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
                            <tbody className="dark:bg-background-secondary-dark dark:text-white">
                                {
                                    data.map((row, rowIndex) =>
                                        <tr key={table_id + "_row_" + rowIndex} className="border-b-2 dark:border-dark border-light ">
                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap flex items-center  dark:bg-background-secondary-dark dark:text-white" >
                                                <img src={row.agent_avatar} className="w-10 h-10 rounded-xl mr-2" /> <span>{row["Agt First Name"]} {row["Agt Last Name"]}</span>
                                            </td>
                                            {
                                                tableHead.slice(3, tableHead.length).map((cell, cellIndex) =>
                                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-center   dark:bg-background-secondary-dark dark:text-white"  key={table_id + "_cell_" + rowIndex + cellIndex}>{row[cell]}</td>
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