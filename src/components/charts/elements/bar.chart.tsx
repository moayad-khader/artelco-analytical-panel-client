'use client';

import { FC, memo , useMemo } from "react";
import dynamic from "next/dynamic";
import { apexchartsDataFormConverter } from "lib/utils";
import { useTheme } from "next-themes";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartProps {
    details: any
}
const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];

const BarChart: FC<BarChartProps> = ({ details }) => {

    const { xLabels, series } = useMemo(() => {
        return apexchartsDataFormConverter(details, "label")
    },[]);
    const { setTheme, theme } = useTheme()
    return (
        <Chart
            options={{
                chart: {
                    height: 450,
                    type: "bar",
                    toolbar: {
                        show: false,
                        
                    },
                },
                plotOptions: {
                    bar: {
                        distributed: true, // this line is mandatory
                        horizontal: true,
                    
                        // barHeight: '85%',
                        borderRadius: 9,
                        
                    },
                },
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    width: 1,
                },
                colors,
                grid: {
                    show: true,
                    
                },
                xaxis: {
                    labels: {
                        rotate: -25,
                        style: {
                            fontSize: '10px'
                        }
                    },
                    categories: xLabels,
                    tickPlacement: "on",
                },
                yaxis: {},
                noData: {
                    text: "No Data Available",
                    align: "center",
                    verticalAlign: "middle",
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: "#FFF",
                        fontSize: "14px",
                        fontFamily: "Source Sans",
                    },
                },
                theme: {
                    mode: theme === "dark"? "dark":"light",
                },
                tooltip: {
                    theme: "dark"
                },
                legend: {
                    show: true,
                    position: 'bottom',
                },
                
                title: {
                    text: 'CCMS Summary', // Set your chart title here
                    align: 'center',
                    style: {
                        fontSize: '18px'
                    }
                    
                },
            }}
            series={series}
            type="bar"
            height={"100%"}
            width={"100%"}
            style={{
                width: "100%", // width set to 100%
                maxWidth: "100%", // ensure that the maximum width is also 100%
              }}
        />
    );
};

export default memo(BarChart);
