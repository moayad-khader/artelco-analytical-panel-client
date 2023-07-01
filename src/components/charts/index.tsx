"use client";
import { FC, useEffect, useMemo } from "react";
import { cn } from "lib/utils";
import { IChartComponent } from "types/chart.types";
import { ChartFactory } from "lib/factory";
import { useTheme } from "next-themes";
interface Props {
    chart_type: string;
    className?: string,
    title: string,
    details: any
}

const Chart: FC<Props> = ({
    chart_type,
    className,
    title,
    details
}) => {

    const ChartComponent: IChartComponent = useMemo(
        () =>
            ChartFactory.createChart(
                chart_type
            ).getChart(),
        [chart_type]
    );
    const { setTheme, theme } = useTheme()

    useEffect(() => {
        const queryString = window.location.search;
        const searchParams = new URLSearchParams(queryString);
        const value = searchParams.get('theme');
        setTheme(value || "dark");
    },[]);
    
   
    return (
        <div
            className={cn(
                " h-full p-2 border-2 dark:border-gray-800 pb-0 bg-accent dark:bg-[#424242] rounded-xl shadow-xl space-y-2 ",
                className
            )}
        >
            <ChartComponent 
                details={details}
            />
        </div>

    )

}

export default Chart;