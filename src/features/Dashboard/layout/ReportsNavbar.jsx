import profile from "../../../assets/reportsProfile.png";

const ReportsNavbar = () => {
  return (
    <div className="flex justify-end h-16 items-center p-4 bg-[#FFFFFFCC] border-b border-[#E5E7EB]">
      <img src={profile} alt="Profile" />
    </div>
  );
};

export default ReportsNavbar;
