import education from "../../../assets/education-Online-Learning-02.png";
import back from "../../../assets/back-icon.png";

export const SignUpBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F9FAFB] w-full md:w-1/2 p-12 relative">
      <img
        src={back}
        alt="Back"
        className="absolute  top-8 left-8 w-4 h-4 md:w-7 md:h-6"
      />
      <h3 className="md:hidden absolute top-8 text-[18px] text-[#1F2937] font-extrabold">
        Create Account
      </h3>
      <h1 className="text-[48px] font-extrabold mt-8 mb-8">
        <span className="text-gray-800">Talent</span>
        <span className="text-[#7C3AED]">Flow</span>
      </h1>

      <img
        src={education}
        alt="Education Illustration"
        className=" object-contain w-64 h-64 "
      />

      <h2 className="text-[24px] font-semibold text-[#1E3A5F] text-center">
        The Modern Mentor
      </h2>
      <p className="text-[#6B7280] text-[16px] text-center mt-2 font-normal">
        Empowering professional growth through semantic learning environments.
      </p>
    </div>
  );
};
