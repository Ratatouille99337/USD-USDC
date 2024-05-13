import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [usdamount, setusdamount] = useState("");
  const [usdcamount, setusdcamount] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleUsdamount = (e) => {
    setusdamount(e.target.value);
    setusdcamount(e.target.value * 0.999837);
  };

  return (
    <div className="bg-cover w-full h-screen bg-[url('./background.jpg')]">
      <div className="w-full p-10 text-5xl font-bold text-center text-amber-300 text">
        Welcome
      </div>
    </div>
  );
};

export default Dashboard;
