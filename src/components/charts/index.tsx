"use client";
import { FC, useEffect, useMemo } from "react";
import { cn } from "lib/utils";
import { IChartComponent } from "lib/types/chart.types";
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

   
    return (
        <div
            className={cn(
                " h-full p-2 border-2 dark:border-dark border-light pb-0 bg-accent dark:bg-background-secondary-dark rounded-xl  space-y-2 ",
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