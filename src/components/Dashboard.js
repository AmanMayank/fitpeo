import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

const Dashboard = () => {
  return (
    <div className="ml-20 px-4 w-fll bg-gray-50 mt-5 pb-5">
      <h2 className="text-2xl font-sans text-gray-500 font-bold">Dashboard</h2>

      <div className="gap-3">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
    </div>
  );
};

export default Dashboard;
