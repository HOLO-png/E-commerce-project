import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";
import "./DashboardMain.scss";

const DashboardMain = () => {
  return (
    <div className="dashboardMain">
      <div className="dashboardMain__header">
        <div className="dashboardMain__search shadow">
          <input type="text" placeholder="search..." />
          <SearchOutlined />
        </div>
        <div className="dashboardMain__user">
          <img
            src="https://lh3.googleusercontent.com/proxy/EP9M0xPAwFk9iyy4t9A3l-JMjayF8RA5poOXL4YxVOidkG6pYAQNmUKI2KE6MUZw4Q6z3PNyNTW3UBLIoEaRfYYwopS0h-OiA26o6YpGgA"
            alt="user picture"
            className="dashboardMain__user-picture"
          />
          <div className="dashboardMain__user-name">Kieu Dac</div>
        </div>
        <div className="dashboardMain__noti">
          <BellOutlined />
          <span className="dashboardMain__noti-bagde">11</span>
        </div>
      </div>
      <div className="dashboardMain__content">
        <div className="dashboardMain__cards">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <DashboardChart />
      </div>
    </div>
  );
};

export default DashboardMain;
