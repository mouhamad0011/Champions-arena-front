import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllBookings } from "../redux/actions/booking";

const BarChart = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

 // console.log(bookings)
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ]
 console.log(months);
 const monthBilling = months.map((month) =>
 bookings
   .filter((booking) => booking.date.split("-")[1] === month)
   .map((booking) => booking.bill)
   .reduce((prev, bill) => prev + bill, 0)
);
console.log(monthBilling)
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      colors: [
        "#006A4A",
       
      ],
      fill: {
        colors: [
          "#006A4A",
          
        ],
      },
    },
    series: [
      {
        name: "outcome",
        data: monthBilling,
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width={600}
      />
    </div>
  );
};

export default BarChart;
