import { Line } from "rc-progress";
import React from "react";

const StatsCard = ({ title, value, extra, line, target }) => {
  return (
    <div className="bg-[#FFFFFF] p-8 rounded-lg h-40 shadow-sm">
      <p className="text-[#4A4455] text-[16px] font-medium ">{title}</p>
      <h2 className="text-[36px] font-extrabold my-2 text-[#1F2937]">
        {value}
      </h2>
      {extra && (
        <p className="text-[#0D9488] text-sm font-bold">
          {extra} from last month
        </p>
      )}
      {line && (
        <Line
          percent={line}
          strokeWidth={2}
          strokeColor="#0D9488"
          trailColor="#F9FAFB"
        />
      )}
      {target && (
        <p className="text-[#4A4455] text-sm font-medium ">Target: {target}</p>
      )}
    </div>
  );
};

export default StatsCard;
