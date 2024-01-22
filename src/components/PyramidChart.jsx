import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings } from "../redux/actions/booking";

const PyramidChart = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

const countUserBookings = () => {
  const userBookings = {};

  bookings.forEach((booking) => {
    const userId = booking.userId;

    if (userId) {
      const userKey = `${booking.userId.firstName} ${booking.userId.lastName}`;
      userBookings[userKey] = (userBookings[userKey] || 0) + 1;
    }
  });

  return userBookings;
};

const getTop5Users = () => {
  const userBookings = countUserBookings();

  const top5 = Object.entries(userBookings)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5);

  return top5.map(([userKey, count]) => ({ x: userKey, y: count }));
};


  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: 'bar',
        height: 500,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          isFunnel: true,
        },
      },
      colors: [
        "#D21034",
       
      ],
      fill: {
        colors: [
          "#D21034",
          
        ],
      },
    },
    series: [
      {
        name: "Funnel Series",
        data :getTop5Users().reverse()
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

export default PyramidChart;
