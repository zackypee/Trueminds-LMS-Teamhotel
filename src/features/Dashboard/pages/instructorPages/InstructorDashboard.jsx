import InstrucDashMain from "../../components/instructorComponents/InstructorDashMain";
import InstructorDashMenuBar from "../../components/instructorComponents/InstructorDashMenuBar";
import LearningActivityTable from "../../components/instructorComponents/InstructorLearningActivityTable";

function InstructorDashboard() {
  return (
    <div className="flex flex-col ">
      <InstrucDashMain/>
      <LearningActivityTable />
    </div>
  );
}

export default InstructorDashboard;
