import InstrucDashMain from "../components/InstructorDashMain";
import InstructorDashMenuBar from "../components/InstructorDashMenuBar";
import LearningActivityTable from "../components/LearningActivityTable";

function InstructorDashboard() {
  return (
    <div className="flex flex-col">
      <InstrucDashMain/>
      <LearningActivityTable />
    </div>
  );
}

export default InstructorDashboard;
