import React from "react";
import SideNav from "../components/navigasi/SideNav";
import TimeLine from "../components/timeline/TimeLine";
import Sugestion from "../components/sugestion/Sugestion";

function HomePage() {
  return (
    <div className="flex">
      <div className="flex-[0.2]">
        <SideNav />
      </div>
      <div className="flex-[0.8]">
        <TimeLine />
      </div>
      <div className="flex-[0.2]">
        <Sugestion />
      </div>
    </div>
  );
}

export default HomePage;
