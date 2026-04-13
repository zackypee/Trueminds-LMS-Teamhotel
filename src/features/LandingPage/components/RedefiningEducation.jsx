import { PiShareNetworkLight } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import { TbChartLine } from "react-icons/tb";
import avatar1 from "../../../assets/avatar-1.jpg";
import avatar2 from "../../../assets/avatar-2.jpg";
import avatar3 from "../../../assets/avatar-3.jpg";
import measurable1 from "../../../assets/measurable-1.jpg";
import measurable2 from "../../../assets/measurable-2.jpg";

function RedefiningEducation() {
  return (
    <section className="px-6 md:px-16 py-20 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] mb-5">
        Redefining Education
      </h2>
      <p className="text-[#6B7280] text-base md:text-2xl mb-12">
        We focus on three pillars to ensure your organization stays ahead of the
        curve.
      </p>

      {/* Grid */}
      <div
        className="grid grid-cols-1 gap-6"
        style={{ gridTemplateColumns: undefined }}
      >
        {/* Override grid on desktop only */}
        <div
          className="hidden md:grid gap-6"
          style={{ gridTemplateColumns: "2fr 1fr" }}
        >
          {/* Card 1 - Centralized Learning - Desktop */}
          <div className="border border-[#E5E7EB] rounded-2xl p-10">
            <PiShareNetworkLight className="text-5xl text-[#0029FD] mb-10" />
            <h3 className="text-3xl font-bold text-[#1E3A5F] mb-10">
              Centralized learning
            </h3>
            <p className="text-xl text-[#6B7280] mb-10">
              Consolidate all your educational assets, SCORM content, and live
              workshops into a single, beautifully curated dashboard.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#F9FAFB] text-center">
                <p className="text-4xl font-bold text-[#0029FD]">100%</p>
                <p className="text-md text-[#6B7280] mt-1">Unified</p>
              </div>
              <div className="border border-[#E5E7EB] rounded-xl p-6 bg-[#F9FAFB] text-center">
                <p className="text-4xl font-bold text-[#0029FD]">0</p>
                <p className="text-md text-[#6B7280] mt-1">Silos</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Seamless Collaboration - Desktop */}
          <div className="bg-[#0029FD] rounded-2xl px-10 py-20 flex flex-col justify-between">
            <div>
              <HiOutlineUsers className="text-5xl text-white mb-10" />
              <h3 className="text-3xl font-bold text-white mb-10">
                Seamless collaboration
              </h3>
              <p className="text-xl text-blue-200">
                Built-in social layers allow learners to discuss, share, and
                solve problems together in real-time.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-10">
              <div className="flex">
                <img
                  src={avatar1}
                  alt="avatar"
                  className="w-15 h-15 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={avatar2}
                  alt="avatar"
                  className="w-15 h-15 rounded-full border-2 border-white object-cover -ml-2"
                />
                <img
                  src={avatar3}
                  alt="avatar"
                  className="w-15 h-15 rounded-full border-2 border-white object-cover -ml-2"
                />
              </div>
              <span className="text-white text-xs font-medium bg-blue-700 px-6 py-6 rounded-2xl">
                +12
              </span>
            </div>
          </div>

          {/* Card 3 - Measurable Outcomes - Desktop */}
          <div className="col-span-2 border border-[#E5E7EB] rounded-2xl p-8 flex justify-between items-center gap-6">
            <div>
              <TbChartLine className="text-5xl text-[#0D9488] mb-4" />
              <h3 className="text-3xl font-bold text-[#1E3A5F] mb-10">
                Measurable outcomes
              </h3>
              <p className="text-xl text-[#6B7280] mb-10">
                Comprehensive analysis to keep track of learner performances,
                shortcomings and Overall Insights
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <img
                src={measurable1}
                alt="measurable"
                className="w-98 h-50 object-cover rounded-lg"
              />
              <img
                src={measurable2}
                alt="measurable"
                className="w-98 h-50 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Card 1 - Centralized Learning - Mobile */}
          <div className="border border-[#E5E7EB] rounded-2xl p-6">
            <PiShareNetworkLight className="text-4xl text-[#0029FD] mb-6" />
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
              Centralized learning
            </h3>
            <p className="text-sm text-[#6B7280] mb-6">
              Consolidate all your educational assets, SCORM content, and live
              workshops into a single, beautifully curated dashboard.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#E5E7EB] rounded-xl p-4 bg-[#F9FAFB] text-center">
                <p className="text-2xl font-bold text-[#0029FD]">100%</p>
                <p className="text-xs text-[#6B7280] mt-1">Unified</p>
              </div>
              <div className="border border-[#E5E7EB] rounded-xl p-4 bg-[#F9FAFB] text-center">
                <p className="text-2xl font-bold text-[#0029FD]">0</p>
                <p className="text-xs text-[#6B7280] mt-1">Silos</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Seamless Collaboration - Mobile */}
          <div className="bg-[#0029FD] rounded-2xl p-6 flex flex-col gap-6">
            <HiOutlineUsers className="text-4xl text-white" />
            <h3 className="text-xl font-bold text-white">
              Seamless collaboration
            </h3>
            <p className="text-sm text-blue-200">
              Built-in social layers allow learners to discuss, share, and solve
              problems together in real-time.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                <img
                  src={avatar1}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={avatar2}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2"
                />
                <img
                  src={avatar3}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2"
                />
              </div>
              <span className="text-white text-xs font-medium bg-blue-700 px-3 py-1 rounded-full">
                +12
              </span>
            </div>
          </div>

          {/* Card 3 - Measurable Outcomes - Mobile */}
          <div className="border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-6">
            <TbChartLine className="text-4xl text-[#0D9488]" />
            <h3 className="text-xl font-bold text-[#1E3A5F]">
              Measurable outcomes
            </h3>
            <p className="text-sm text-[#6B7280]">
              Comprehensive analysis to keep track of learner performances,
              shortcomings and Overall Insights
            </p>
            <div className="flex flex-col gap-3">
              <img
                src={measurable1}
                alt="measurable"
                className="w-full h-40 object-cover rounded-lg h-[300px] md:h-auto"
              />
              <img
                src={measurable2}
                alt="measurable"
                className="w-full h-40 object-cover rounded-lg h-[300px] md:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RedefiningEducation;
