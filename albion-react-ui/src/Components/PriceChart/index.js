import { Card } from "antd";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function PriceChart() {
  const [data, setData] = useState({
    pnl: [
      -2189.845652, -1690.315217, -806.251087, 72390.575, 175898.825, 219843.65,
      90452.65, 84896.35, 309312.025, 163197.475,
    ],
    total: [
      -2189.845652, -3880.16087, -4686.411957, 67704.16304, 243602.988,
      463446.638, 553899.288, 638795.638, 948107.663, 1111305.138,
    ],
    labels: [
      "06/01/2023",
      "06/03/2023",
      "06/04/2023",
      "06/05/2023",
      "06/07/2023",
      "06/08/2023",
      "06/09/2023",
      "06/10/2023",
      "06/11/2023",
      "06/12/2023",
    ],
  });
  const [loading, setLoading] = useState(true)

  const numberFormatter = (val,digits = 2) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return val >= item.value;
    });
    return item ? (val / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

  useEffect(() => {}, []);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); //test timer
    return () => clearTimeout(timer);
  }, []);

  const state = {
    series: [
      {
        name: "PnL",
        type: "column",
        data: data.pnl,
      },
      {
        name: "Total",
        type: "line",
        data: data.total,
      },
    ],
    options: {
      chart: {
        type: "line",
        redrawOnParentResize: true,

      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Profit/Loss analysis",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: data.labels,
      xaxis: {
        type: "datetime",
        labels: {
          format: "dd/MM/yyyy",
        },
      },
      yaxis: [
        {
          title: {
            text: "Daily P/L",
          },
          labels: {
            // formatter: numberFormatter
          },
          decimalsInFloat:2
        },
        {
          opposite: true,
          title: {
            text: "Total revenue",
          },
          labels: {
            // formatter: numberFormatter
          },
          decimalsInFloat:2
        },
      ],
    },
  };
  return (
    <div className="price-chart" style={{padding:20, flex:1}}>
        <Card loading={loading} >
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height="300"
            width="100%"
          />
        </Card>
    </div>
  );
}

export default PriceChart;
