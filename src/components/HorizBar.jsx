import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings } from "../redux/actions/booking";

const HorizBar = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);


  const countTimeSlots = () => {
    const timeSlotCounts = {};

    bookings.forEach((booking) => {
      const time = booking.time;
      timeSlotCounts[time] = (timeSlotCounts[time] || 0) + 1;
    });

    return timeSlotCounts;
  };

  // Function to get top 5 time slots
  const getTop5TimeSlots = () => {
    const timeSlotCounts = countTimeSlots();

    const top5 = Object.entries(timeSlotCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, 5);

    return top5.map(([time, count]) => ({ x: time, y: count }));
  };
 console.log(getTop5TimeSlots().reverse())
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: 'bar',
        height: 300,
      },
      plotOptions: {
        bar: {
          horizontal: true
        },
      },
      colors: [
        "#CCA500",
       
      ],
      fill: {
        colors: [
          "#CCA500",
        ],
      },
    },
    series: [
      {
        name: "Funnel Series",
        data : getTop5TimeSlots().reverse()
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

export default HorizBar;
