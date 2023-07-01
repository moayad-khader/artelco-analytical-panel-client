import { FC, useMemo } from "react";
import { cn } from "lib/utils";
import { IChartComponent } from "types/chart.types";
import { ChartFactory } from "lib/factory";

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
                " h-full p-4 border-2 pb-0 bg-accent rounded-xl shadow-xl space-y-2 ",
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