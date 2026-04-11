import profileImg from "../../../../assets/profile-img.png";

const AdminTopBar = () => {
  return (
    <header className=" fixed top-0 z-2 left-64 right-0 h-16 bg-white shadow-sm flex items-center justify-end px-6">
        
      <div className="flex items-center gap-3">
        <img src={profileImg} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
      </div>
        
    </header>
  );
};

export default AdminTopBar;