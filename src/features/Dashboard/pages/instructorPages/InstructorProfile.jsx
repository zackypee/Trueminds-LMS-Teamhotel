import { useState } from "react";
import InstructorProfileSidebar from "../../components/instructorComponents/InstructorProfileSidebar";
import InstructorProfileView from "../../components/instructorComponents/InstructorProfileView";
import InstructorProfileDetails from "../../components/instructorComponents/InstructorProfileDetails";
import useUserProfile from "../../../../globalHooks/useUserProfile";
import LoadingState from "../../../../components/LoadingState";
import InstructorEditProfileModal from "../../components/instructorComponents/InstructorEditProfileModal";

function InstructorProfile() {
  const {userProfile, loading, error, setRefresh} = useUserProfile();

  const [modalOpen, setModalOpen] = useState(false);
  
    function handleModalOpen() {
      setModalOpen(true);
    }
  
    function handleCloseModal() {
      setModalOpen(false);
    }

  
  if(loading){
   return (
     <LoadingState/>
    )
  }

  if(error){
   return (
     <ErrorMessage message={error} className="flex items-center justify-center h-full bg-white"/>
    )
  }

  return (
    <div className="flex w-full gap-5 p-4">
      <div className="md:grid grid-cols-2">
        <InstructorProfileView
         userProfile={userProfile}
         handleModalOpen={handleModalOpen}
        />
        <InstructorProfileDetails userProfile={userProfile} />


        {modalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            {/* Modal Container */}
            <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-lg overflow-hidden flex flex-col">
              {/* Modal Header (Sticky) */}
              <div className="flex justify-end p-4 border-b">
                <button
                  className="bg-[#0029F5] text-white px-4 py-2 rounded-md hover:bg-[#1E3A5F] transition-colors"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
  
              {/* Modal Content (Scrollable) */}
              <div className="overflow-y-auto">
                <InstructorEditProfileModal
                  onClose={handleCloseModal}
                  userProfile={userProfile}
                  setRefresh={setRefresh}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default InstructorProfile;