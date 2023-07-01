import { IChartComponent } from "types/chart.types";
import {
    BarChart as BarChartComponent,
    AreaChart as AreaChartComponent
} from "components/charts/elements";


class Chart {

    chart: IChartComponent;

    constructor() {
        console.log("ss")
    }

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

class AreaChart extends Chart {
    constructor() {
        super();
        this.chart = AreaChartComponent;
    }

}



class ChartFactory {
    static createChart(chart_type: string): Chart {
        switch (chart_type) {
            case "bar":
                return new BarChart();
            case "area":
                return new AreaChart();
        }
    }
}


export default ChartFactory;
