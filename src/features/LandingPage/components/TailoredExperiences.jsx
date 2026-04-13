import { PiStudent } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";

function TailoredExperiences() {
  return (
    <section className="px-6 md:px-16 py-20 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] text-center mb-4">
        Tailored Experiences
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Card 1 - For Learners */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-[#F0F4FF] p-4 rounded-xl mb-6">
            <PiStudent className="text-4xl md:text-5xl text-[#0029FD]" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#1E3A5F] mb-3">
            For Learners
          </h3>
          <p className="text-sm md:text-xl text-[#6B7280] leading-relaxed">
            Personalized pathways, micro-learning chunks, and a distraction-free
            environment for deep focus, as well as learners collaboration.
          </p>
        </div>

        {/* Card 2 - For Instructors */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-[#F0F4FF] p-4 rounded-xl mb-6">
            <RiUserLine className="text-4xl md:text-5xl text-[#0029FD]" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#1E3A5F] mb-3">
            For Instructors
          </h3>
          <p className="text-sm md:text-xl text-[#6B7280] leading-relaxed">
            Course builders, grading system, and real-time engagement monitoring
            and statistics tools.
          </p>
        </div>

        {/* Card 3 - For Admins */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-[#F0F4FF] p-4 rounded-xl mb-6">
            <MdAdminPanelSettings className="text-4xl md:text-5xl text-[#0029FD]" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#1E3A5F] mb-3">
            For Admins
          </h3>
          <p className="text-sm md:text-xl text-[#6B7280] leading-relaxed">
            Easy Role allocation, easy SSO integration, and comprehensive
            compliance management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TailoredExperiences;
