import React from "react";
import InstructorProfileSidebar from "../../components/instructorComponents/InstructorProfileSidebar";
import InstructorProfileView from "../../components/instructorComponents/InstructorProfileView";
import InstructorProfileDetails from "../../components/instructorComponents/InstructorProfileDetails";
import useUserProfile from "../../../../globalHooks/useUserProfile";
import LoadingState from "../../../../components/LoadingState";

function InstructorProfile() {
  const [activeLink, setActiveLink] = React.useState("Dashboard");
  const {userProfile, loading, error} = useUserProfile();

  
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
    <div className="flex w-full gap-5">
      <div className="md:grid grid-cols-2">
        <InstructorProfileView userProfile={userProfile} />
        <InstructorProfileDetails userProfile={userProfile} />
      </div>
      
    </div>
  );
}

export default InstructorProfile;