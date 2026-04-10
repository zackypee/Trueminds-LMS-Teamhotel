import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RedefiningEducation from "../components/RedefiningEducation";
import TailoredExperiences from "../components/TailoredExperiences";
import CTASection from "../components/CTASection";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <RedefiningEducation />
      <TailoredExperiences />
      <CTASection />

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10 bg-white flex flex-col items-center gap-6 md:gap-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F]">
          Talent<span className="text-[#0029FD]">Flow</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <p className="text-sm md:text-xl text-[#94A3B8] cursor-pointer hover:text-[#0029FD]">
            Privacy Policy
          </p>
          <p className="text-sm md:text-xl text-[#94A3B8] cursor-pointer hover:text-[#0029FD]">
            Terms of Service
          </p>
          <p className="text-sm md:text-xl text-[#94A3B8] cursor-pointer hover:text-[#0029FD]">
            Contact Support
          </p>
        </div>
        <p className="text-sm md:text-xl text-[#94A3B8]">
          © 2026 TalentFlow LMS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
