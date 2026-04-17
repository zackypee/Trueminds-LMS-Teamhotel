import React from "react";
import { useState } from "react";
import UserProfileView from "../userComponents/UserProfileView";
import UserProfileDetails from "../userComponents/UserProfileDetails";
import useUserProfile from "../../../globalHooks/useUserProfile";
import LoadingState from "../../../components/LoadingState";
import ErrorMessage from "../../../components/ErrorMessage";
import UserEditProfileModal from "../userComponents/UserEditProfileModal";

function UserProfile() {
  const { userProfile, loading, error, setRefresh } = useUserProfile();

  const [modalOpen, setModalOpen] = useState(false);

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        className="flex items-center justify-center h-full bg-white"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 p-4">
      <UserProfileView
        userProfile={userProfile}
        handleModalOpen={handleModalOpen}
      />
      <UserProfileDetails userProfile={userProfile} />

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
              <UserEditProfileModal
                onClose={handleCloseModal}
                userProfile={userProfile}
                setRefresh={setRefresh}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
