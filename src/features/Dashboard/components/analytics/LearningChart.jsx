import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { day: "Mon", value: 38 },
  { day: "Tue", value: 56 },
  { day: "Wed", value: 42 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 66 },
  { day: "Sat", value: 52 },
  { day: "Sun", value: 75 },
];

const colors = [
  "#6B7280",
  "#0029F50D",
  "#630ED433",
  "#630ED4",
  "#E5E7EB",
  "#1E3A5F",
  "#0D9488",
];

const LearningChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-103 ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-extrabold text-[18px] text-[#001C3B]">
          Learning Activity
        </h3>
        <span className="cursor-pointer text-[#4A4455]">•••</span>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barCategoryGap={0} barGap={0}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ textAnchor: "end" }}
            className="text-[#4A4455] text-[12px] font-bold"
          />

          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
            }}
          />

          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LearningChart;
