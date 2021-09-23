import React from "react";
import DashboardLeftNav from './DashboardLeftNav'

export default function MemberDashboard() {
  return (
    <div class="container-fluid">
      <div className="row">
        <div class="col-12">
          <h1>MemberDashboard</h1>
          <DashboardLeftNav />
        </div>
      </div>
    </div>
  );
}
