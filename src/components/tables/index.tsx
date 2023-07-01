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

        <section className="relative h-full ">

            <div className="relative mx-auto  min-h-full h-full overflow-auto max-h-full  ">
                <div className="relative overflow-hidden bg-white  rounded-md h-full border-2 border-gray-300 ">

                    <div className="overflow-x-auto h-full">
                        <table className="w-full text-sm text-left text-gray-500  h-full  border-2 ">
                            <thead className="text-xs text-gray-700 bg-gray-200 uppercase bg-gray-50 shadow-4xl border-b-2 border-[#1f77b4]">
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
                            <tbody className="bg-gray-100">
                                {
                                    data.map((row, rowIndex) =>
                                        <tr key={table_id + "_row_" + rowIndex} className=" ">
                                            {
                                                tableHead.map((cell, cellIndex) =>
                                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-center border-b-2" key={table_id + "_cell_" + rowIndex + cellIndex}>{row[cell]}</td>

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