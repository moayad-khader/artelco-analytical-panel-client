import { IChartComponent } from "types/chart.types";
import {
    BarChart as BarChartComponent
} from "components/charts/elements";


class Chart {

    chart: IChartComponent;

    constructor() {}

    getChart():IChartComponent{
        return this.chart;
    }
}


class BarChart extends Chart {
    constructor() {
        super();
        this.chart = BarChartComponent;
    }

}


class ChartFactory {
    static createChart(chart_type: string): Chart {
        switch (chart_type) {
            case "bar":
                return new BarChart();
        }
    }
}


export default ChartFactory;
