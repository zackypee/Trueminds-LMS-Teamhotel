import React, { useState, useEffect } from "react";
import certiLogo from "../../../assets/certificate-icon.png";
import certiLogo2 from "../../../assets/certificate-icon-2.png";
import shareLogo from "../../../assets/share-icon.png";
import downloadLogo from "../../../assets/download-icon.png";
import arrowBack from "../../../assets/arrow-back-icon.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../userComponents/Navbar";

export default function Certificate() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [isDownloaded, setIsDownloaded] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  return (
   <div className="min-h-screen ">
    <Navbar />
     <div className="bg-[#F8FAFC] flex flex-col items-center justify-center py-12 px-4 mt-4">
      {/* Header */}
      <div className="text-center max-w-2xl mb-8">
        <div className="flex justify-center mb-4">
          <img src={certiLogo} alt="" className="" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#001C3B] mb-4">
          Congratulations!
        </h1>
        <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed">
          You've successfully mastered the curriculum for{" "}
          <span className="font-bold text-[#1F2937]">
            Advanced Design system: From concept to prototype.
          </span>{" "}
          Good Job!
        </p>
      </div>

      {/* Certificate Card */}
      <div className="flex flex-col gap-6 md:flex-row shadow-xl h-125 rounded-2xl overflow-hidden max-w-5xl mb-8">

        {/* Left - Certificate */}
        <div className="relative flex flex-col justify-between bg-white p-8 md:p-12 h-full md:w-2/3 items-center">
          <div className="absolute left-8 top-8 w-16 h-16 border-t-2 border-l-2 border-[#e0cff6]"></div>
          <div className="absolute right-8 top-8 w-16 h-16 border-t-2 border-r-2 border-[#e0cff6]"></div>
          <div className="absolute right-8 bottom-8 w-16 h-16 border-b-2 border-r-2 border-[#e0cff6]"></div>
          <div className="absolute left-8 bottom-8 w-16 h-16 border-b-2 border-l-2 border-[#e0cff6]"></div>

          <div className="flex flex-col gap-2 items-center justify-between">
            <p className="text-[#0029F5] text-[18px] md:text-[20px] font-semibold mb-6">
              Certificate of Completion
            </p>
            <p className="text-[#455F87] text-[14px] md:text-[16px] mb-2">
              This is to certify that
            </p>
               {/* USER NAME FETCH FROM L.S */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#001C3B] mb-6">
              {userName || "Loading..."}
            </h2>

            <p className="text-[#455F87] text-center text-[14px] md:text-[16px] mb-1">
              has successfully completed the professional course
            </p>
            <p className="text-[#001C3B] font-bold text-[16px] md:text-[18px] mb-10">
              Advanced Design system: From concept to prototype
            </p>
          </div>

          {/* Footer row */}
          <div className="flex gap-20 items-center justify-between">
            <div className="flex">
              <p className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-wider">
                Sarah Jenkins, Director
              </p>
            </div>
            <div className="flex">
              <img src={certiLogo2} alt="" className="" />
            </div>
            <div className="flex flex-col text-right">
              <p className="text-[#475569] font-bold text-[15px]">
                Apr 10, 2026
              </p>
              <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">
                Issue Date
              </p>
            </div>
          </div>
        </div>

        {/* Right - Credential Details */}
        <div className="bg-[#F8FAFC] p-8 md:w-1/3 flex flex-col gap-6 border-l border-gray-100">
          <h2 className="text-[#1F2937] text-[18px] md:text-[20px] font-semibold">
            Credential Details
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-[#94A3B8] font-semibold text-[12px] uppercase tracking-wider">
              ID Number
            </p>
            <p className="text-[#1F2937] font-medium text-[14px]">
              TF-2024-9981-ADPS
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#94A3B8] font-semibold text-[12px] uppercase tracking-wider">
              Skill Proficiency
            </p>
            <div className="flex flex-wrap gap-2">
              {["PROTOTYPING", "UI/UX", "SYSTEMS"].map((skill) => (
                <span
                  key={skill}
                  className="text-[#1E3A5F] font-bold text-[10px] bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <hr className="border-[#E2E8F0]" />
          <p className="bg-[#F0FDF9] text-[#0D9488] text-center text-[13px] leading-relaxed py-4 px-3 rounded-lg">
            This certificate is verified by the TalentFlow Accreditation Board.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-lg justify-center">
        <button 
          onClick={()=>{
            setTimeout(()=>{
              setIsDownloaded(true)
            }, 2000)
          }}
        className="flex items-center px-4 gap-2 text-[15px] font-semibold text-white bg-[#0D9488] hover:bg-[#0b7d73] transition-colors rounded-lg py-2">
          <img src={downloadLogo} alt="" />
          Download Certificate
        </button>

        
        <button className="flex items-center px-6 gap-4 text-[15px] font-semibold text-[#1F2937] bg-white hover:bg-gray-50 transition-colors border border-[#E5E7EB] rounded-lg py-2">
          <img src={shareLogo} />
          Share to LinkedIn
        </button>
      </div>
      {isDownloaded && 
      <p
       className="text-[#0D9488]"
      > Downloaded Successfully</p>}

      <button
        onClick={() => navigate("/learner")}
        className="cursor-pointer flex items-center gap-2 text-[#0029F5] font-semibold text-[16px] hover:opacity-75 transition-opacity"
      >
        <img src={arrowBack} alt="" />
        Back to Dashboard
      </button>
    </div>
   </div>
  );
}