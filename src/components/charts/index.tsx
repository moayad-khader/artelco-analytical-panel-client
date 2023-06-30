import { FC , useMemo } from "react";
import { IChartComponent  } from "types/chart.types";
import { ChartFactory } from "lib/factory";

interface Props {
    chart_type: string;
}

const Chart:FC<Props> = ({
    chart_type
}) => {

    const ChartComponent: IChartComponent = useMemo(
        () =>
        ChartFactory.createChart(
            chart_type
          ).getChart(),
        [chart_type]
    );

    return <ChartComponent/>;
}

export default Chart;