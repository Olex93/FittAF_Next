import React from "react";
import DashboardLeftNav from './DashboardLeftNav'

export default function MemberDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>MemberDashboard</h1>
          <DashboardLeftNav />
        </div>
      </div>
    </div>
  );
}
