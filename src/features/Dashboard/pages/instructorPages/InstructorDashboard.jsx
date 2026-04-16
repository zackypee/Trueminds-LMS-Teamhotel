import InstrucDashMain from "../../components/instructorComponents/InstructorDashMain";
import LearningActivityTable from "../../components/instructorComponents/InstructorLearningActivityTable";
import LoadingState from "../../../../components/LoadingState";
import useUserProfile from "../../../../globalHooks/useUserProfile";

function InstructorDashboard() {

  const {loading}=useUserProfile();

  if(loading){
   return (
     <LoadingState/>
    )
  }

  return (
    <div className="flex flex-col ">
      <InstrucDashMain/>
      <LearningActivityTable />
    </div>
  );
}

export default InstructorDashboard;
