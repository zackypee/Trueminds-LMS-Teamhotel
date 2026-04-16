import StatsCard from "../../components/analytics/StatsCard";
import Filters from "../../components/analytics/Filters";
import LearningChart from "../../components/analytics/LearningChart";
import CoursePopularity from "../../components/analytics/CoursePopularity";
import { LuPlus } from "react-icons/lu";
import ReportsTable from "../../components/analytics/ReportsTable";

const Reports = () => {
  return (
    <div className="bg-[#FFFFFF] p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 text-[#1F2937]">
            Analytics & Reports
          </h1>
          <p className="text-[#4A4455] font-normal text-[16px] w-153">
            Monitor talent development efficiency and course engagement metrics
            across all departments.
          </p>
        </div>
        <button className="bg-[#0029F5] rounded-lg w-54 h-11.25 text-[#FFFFFF] font-semibold text-[14px] flex items-center gap-2 px-2">
          <LuPlus size={25} />
          Generate New Report
        </button>
      </div>

      <Filters />

      <div className="grid grid-cols-3 gap-4 my-6">
        <StatsCard title="Total Learners" value="12,842" extra="+12%" />
        <StatsCard title="Avg Progress" value="68.4%" line={68.4} />
        <StatsCard title="Course Completion" value="82%" target="85.0%" />
      </div>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "1.8fr 1.2fr" }}
      >
        <div>
          <LearningChart />
        </div>
        <div>
          <CoursePopularity />
        </div>
      </div>
      <ReportsTable />
    </div>
  );
};

export default Reports;
