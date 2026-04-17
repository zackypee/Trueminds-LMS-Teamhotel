import TeamAllocPageHeader from "./sections/TeamAllocPageHeader";
import TeamOverview from "./sections/TeamOverview";
import Users from "./sections/Users";
import AddIcon from "../../../../../assets/plus-icon.svg";
import { useState } from "react";
import CreateAccountForm from "../../../components/adminComponents/CreateAccountForm";
import { useUsers } from "../../../hooks/adminHooks/useUsers";

const TeamAllocationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { fetchUsers } = useUsers();
  const usersHook = useUsers();

  return (
    <div>
      <TeamAllocPageHeader />
      <TeamOverview />
      <Users {...usersHook} />
      <div className="flex justify-end mt-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className=" flex w-14 h-14 rounded-full bg-[#630ED4] items-center justify-center cursor-pointer"
        >
          <img src={AddIcon} alt="Add user icon" className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-md p-8 relative">
            {/* close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3"
            >
              ✕
            </button>

            <CreateAccountForm
              onClose={() => setIsModalOpen(false)}
              onSuccess={usersHook.fetchUsers}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamAllocationPage;
