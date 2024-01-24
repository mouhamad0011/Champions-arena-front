import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTerrains } from "../redux/actions/terrain";
import { getAllBookings } from "../redux/actions/booking";
import Example2 from "../loading/Example2";
const PieChart = () => {
  const dispatch = useDispatch();
  const terrains = useSelector((state) => state.terrains);
  const bookings = useSelector((state) => state.bookings);

  const terrainBilling = terrains.map((terrain) =>
    bookings
      .filter((booking) => booking.terrainId.name === terrain.name)
      .map((booking) => booking.bill)
      .reduce((prev, bill) => prev + bill, 0)
  );
  console.log(bookings);
  const [chartData, setChartData] = useState({
    series: terrainBilling,
    options: {
      chart: {
        width: 600,
        type: "pie",
      },
      labels: terrains.map((terrain) => terrain.name),
      colors: [
        "#006A4A",
        "#00AE79",
        "#A3E8D3",
        "#DAFFF4",
        "#D21034",
        "#FFCE00",
        "#00261B",
      ],
      fill: {
        colors: [
          "#006A4A",
          "#00AE79",
          "#A3E8D3",
          "#DAFFF4",
          "#D21034",
          "#FFCE00",
          "#00261B",
        ],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    dispatch(getAllTerrains());
    dispatch(getAllBookings());
  }, [dispatch]);

  if (bookings.length === 0 || terrains.length === 0) {
    return <Example2 />;
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData?.options}
        series={chartData?.series}
        type="pie"
        width={550}
      />
    </div>
  );
};

export default PieChart;
