import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";

const DashboardCard = () => {
  return (
    <div className="dashboardMain__card shadow">
      <div className="dashboardMain__card-icon">
        <ShoppingCartOutlined />
      </div>
      <div className="dashboardMain__card-quantity">1808</div>
      <div className="dashboardMain__card-title">Totals sale</div>
    </div>
  );
};

export default DashboardCard;
