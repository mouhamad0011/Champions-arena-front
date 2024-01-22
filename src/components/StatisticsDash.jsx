import PieChart from "./PieChart";
import BarChart from "./BarChart";
import PyramidChart from "./PyramidChart";
import HorizBar from "./HorizBar";
import "./analytics.css";

const StatisticsDash = () => {

  return (      
        <div className="analytics">
          <div className="first-two">
            <div className="pie">
              <div className="title">Outcome for every stadium</div>
              <PieChart />
            </div>
            <div className="pyramid">
              <div className="title">Most booked slots</div>
              <HorizBar />
             
            </div>
          </div>
          <div className="second-two">
            <div className="vert-bar">
              <div className="title">Outcome for every month</div>
              <BarChart />
            </div>
            <div className="horiz-bar">
              <div className="title">Users with most bookings</div>
              <PyramidChart />
            </div>
          </div>
         

         
        </div>
     
  );
};

export default StatisticsDash;
