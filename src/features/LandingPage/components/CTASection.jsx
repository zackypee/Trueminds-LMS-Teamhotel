import { useNavigate } from "react-router-dom";

function CTASection() {
  const navigate = useNavigate();


  return (
    <section className="px-6 md:px-56 py-20 bg-white">
      <div className="bg-[#1E3A5F] rounded-3xl px-6 md:px-16 py-12 md:py-20 flex flex-col items-center text-center shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">
          Ready to transform your learning culture?
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full md:w-auto">
          <button 
            className="bg-[#0029FD] text-white text-base md:text-xl font-medium px-8 md:px-15 py-4 md:py-8 rounded-lg hover:bg-blue-800 transition-colors shadow-2xl"
            onClick={() => navigate("/sign-up")}
          >
            Get Started Free
          </button>
          <button className="border border-white text-white text-base md:text-xl font-medium px-8 md:px-15 py-4 md:py-8 rounded-lg hover:bg-white hover:text-[#1E3A5F] transition-colors shadow-2xl">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
