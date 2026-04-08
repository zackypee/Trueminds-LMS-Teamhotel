import profileImg from "../../../../assets/profile-img.png";

const AdminTopBar = () => {
  return (
    <header className="bg-white shadow-sm flex items-center justify-end px-6 py-4">
        
      <div className="flex items-center gap-3">
        <img src={profileImg} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
      </div>
        
    </header>
  );
};

export default AdminTopBar;