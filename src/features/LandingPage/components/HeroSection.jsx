import heroImage from "../../../assets/hero-image.jpg";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 md:px-16 md:py-60 bg-white gap-12">
      {/* Left Side */}
      <div className="max-w-4xl">
        <p className="text-[#0D9488] text-sm font-semibold uppercase tracking-widest mb-4">
          Next Generation LMS
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
          One platform, <br />
          <span className="text-[#0029FD] ">Cohesive learning.</span>
        </h1>
        <p className="text-[#6B7280] text-lg md:text-3xl leading-relaxed mb-8">
          The modern mentor for enterprise growth. Empower your teams with a
          high-end editorial learning experience designed for focus and
          retention.
        </p>
        <button className="bg-[#0029FD] text-white font-medium text-base px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
          Get Started →
        </button>
      </div>

      {/* Right Side */}
      <div className="relative w-full md:w-[650px]">
        {/* Hero Image */}
        <img
          src={heroImage}
          alt="hero"
          className="w-full rounded-2xl object-cover md:rotate-3 shadow-xl h-[400px] md:h-auto"
        />

        {/* Floating Card */}
        <div className="absolute bottom-[-20px] left-[-10px] md:left-[-40px] bg-white shadow-xl rounded-xl px-4 md:px-7 py-3 md:py-6 flex items-center gap-3 md:-rotate-4">
          <div className="bg-green-100 rounded-full p-2">
            <span className="text-green-600 text-sm font-bold">✓</span>
          </div>
          <div>
            <p className="text-sm font-bold text-[#1E3A5F]">Course Completed</p>
            <p className="text-xs text-[#6B7280]">Advanced UI Design Mastery</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
