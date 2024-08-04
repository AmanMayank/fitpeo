import React from "react";

const Dashboard = () => {
  return (
    <div className="ml-20 px-4 w-fll bg-gray-50 mt-5 pb-5">
      <h2 className="text-2xl font-sans text-gray-500 font-bold">Dashboard</h2>

      <div className="gap-3">
        <div className="w-full mt-4 h-40 bg-red-500 border flex gap-4 justify-between">
          <div className="w-[65%] bg-green-400 left-0 h-full flex justify-between gap-2">
            <div className="border-2 bg-slate-400 w-full">1</div>
            <div className="border-2 bg-slate-400 w-full">2</div>
            <div className="border-2 bg-slate-400 w-full">3</div>
            <div className="border-2 bg-slate-400 w-full">4</div>
          </div>
          <div className="w-[35%] bg-green-400 right-0  h-full">2</div>
        </div>
        <div className="w-full mt-4 h-52 bg-red-500 border flex gap-4 justify-between">
          <div className="w-[65%] bg-green-400 left-0 h-full flex justify-between gap-2"></div>
          <div className="w-[35%] bg-green-400 right-0  h-full">2</div>
        </div>
        <div className="w-full mt-4 h-72 bg-red-500 border flex gap-4 justify-between">
          <div className="w-[65%] bg-green-400 left-0 h-full flex justify-between gap-2"></div>
          <div className="w-[35%] bg-green-400 right-0  h-full">2</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
