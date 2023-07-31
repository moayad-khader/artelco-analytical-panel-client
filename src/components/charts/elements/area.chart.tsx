'use client';
import { FC , useMemo } from "react";
import dynamic from "next/dynamic";
import { apexchartsDataFormConverter } from "lib/utils";
import { useTheme } from "next-themes";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
    details: any
}
const colors = ['#E0E71A'];
const AreaChart: FC<Props>  = ({ details }) => {
    const { xLabels, series } = useMemo(() => {
        return apexchartsDataFormConverter(details, "skillset")
    },[]);

    const { setTheme, theme } = useTheme()

  return (
    <Chart
      options={{
        chart: {
          type: "area",
          //   height: 20,
          sparkline: {
            enabled: false,
          },
          offsetY: 3,
        },
        colors,
        stroke: {
          curve: "smooth",
          width: 2,
        },
        fill: {
          opacity: 0.3,
        },
        xaxis: {
          categories: xLabels,
        },
         theme: {
          mode: theme === "dark"? "dark":"light",
        },
        tooltip: {
          enabled: true,
          theme: "dark",
        },
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
      }}
      series={series}
      type="area"
      height={"100%"}
      width={"100%"}
      style={{
          width: "100%", // width set to 100%
          maxWidth: "100%", // ensure that the maximum width is also 100%
          opacity: 50
        }}
    />
  );
};

export default AreaChart;
