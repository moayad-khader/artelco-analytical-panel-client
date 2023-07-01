'use client';
import { FC , useMemo } from "react";
import dynamic from "next/dynamic";
import { apexchartsDataFormConverter } from "lib/utils";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
    details: any
}

const AreaChart: FC<Props>  = ({ details }) => {
    const { xLabels, series } = useMemo(() => {
        return apexchartsDataFormConverter(details, "skillset")
    },[]);

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
        colors: ["#9F6FFC"],
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
        }}
    />
  );
};

export default AreaChart;
