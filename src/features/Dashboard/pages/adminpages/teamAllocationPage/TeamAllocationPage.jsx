import TeamAllocPageHeader from "./sections/TeamAllocPageHeader";
import TeamOverview from "./sections/TeamOverview";
import Users from "./sections/Users";
import AddIcon from "../../../../../assets/plus-icon.svg"

const TeamAllocationPage = () => {
  return (
    <div>   
      <TeamAllocPageHeader />
      <TeamOverview />
      <Users />
      <div className="flex justify-end mt-10">
        <button className=" flex w-14 h-14 rounded-full bg-[#630ED4] items-center justify-center cursor-pointer">
          <img src={AddIcon} alt="Add user icon" className="w-3.5 h-3.5"/>
        </button>
      </div>
    </div>
    );
};

export default TeamAllocationPage;