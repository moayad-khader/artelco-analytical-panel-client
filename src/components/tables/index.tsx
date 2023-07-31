import { FC } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "components/ui/table";

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

        <section className="relative h-full dark:background-secondary-dark bg-white opacity-90 ">

            <div className="relative mx-auto  min-h-full h-full overflow-auto max-h-full   dark:bg-background-secondary-dark ">
                <div className="relative overflow-hidden rounded-lg h-full  dark:bg-background-secondary-dark">

                    <div className="overflow-x-auto h-full dark:bg-background-secondary-dark">
                        <table className="w-full text-sm text-left text-gray-500  h-full  border-2 dark:border-dark border-light p-0 ">
                            <thead className="text-xs text-gray-700 uppercase  shadow-4xl border-b-2 border-primary dark:bg-background-secondary-dark background-secondary-light dark:text-white">
                                <tr>
                                    {
                                        tableHead.map((col, index) =>
                                            <th key={table_id + "_head_" + index} scope="col" className="px-4 py-3 text-center">
                                                {col}
                                            </th>
                                        )
                                    }

                                </tr>
                            </thead>
                            <tbody className="bg-gray-100 dark:bg-background-secondary-dark dark:text-white bg-background-primary-light">
                                {
                                    data.map((row, rowIndex) =>
                                        <tr key={table_id + "_row_" + rowIndex} className=" ">
                                            {
                                                tableHead.map((cell, cellIndex) =>
                                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-center  dark:border-dark border-light  border-b-2 dark:bg-background-secondary-dark dark:text-white" key={table_id + "_cell_" + rowIndex + cellIndex}>{row[cell]}</td>

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