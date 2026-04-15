import { usersData } from "./TeamOverview";
import UsersTable from "../../../../components/adminComponents/UsersTable";
import SearchBar from "../../../../components/adminComponents/SearchBar";
import filterIcon from "../../../../../../assets/filter-icon.svg";
import { useState, useMemo } from "react";
import Pagination from "../../../../components/adminComponents/Pagination";
import FilterBar from "../../../../components/adminComponents/FilterBar";
import useUserFilters from "../../../../hooks/adminHooks/useUserFilters";
import usePagination from "../../../../hooks/adminHooks/usePagination";
import useSelectedUsers from "../../../../hooks/adminHooks/useSelectedUsers";
import UserCard from "../../../../components/adminComponents/UserCard";
import { useUsers } from "../../../../hooks/adminHooks/useUsers";
import useCreateUser from "../../../../hooks/adminHooks/useCreateUser";

const Users = () => {
 
  const { useCreatedUser, handleCreateUser } = useCreateUser();
  const { currentPage, setCurrentPage, itemsPerPage, startIndex } = usePagination();

  const {
    handleOnChangeSearchByName,
    handleFilterByTeamChange,
    handleFilterChange,
    filteredUsers,
    searchByName,
    filterByTeam,
    filters,
    clearState,
  } = useUserFilters();
  const { handleSelectAll, handleSelectUser, selectedUsers } = useSelectedUsers(usersData);
  const [toggleFilterButton, setToggleFilterButton] = useState(false);

  
  const displayedUsers = filteredUsers;
  
  const currentUsers = displayedUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  
  const totalPages = Math.ceil(displayedUsers.length / itemsPerPage);

  const handleSubmit = async (e) => {
    e.preventDefault;

    // await handleCreateUser(data);
  };

  return (
    <section className="users-section border border-[#CCC3D833] rounded-2xl ">
      {/*Section Header*/}
      <div className="flex flex-wrap gap-2 gap-y-4 items-center justify-between p-5 border-b border-[#CCC3D81A] bg-[#F0F3FF33]">
        <div className="search-container">
          <SearchBar
            handleOnChangeSearch={handleOnChangeSearchByName}
            value={searchByName}
            setToggleFilterButton={setToggleFilterButton}
            placeholder={"Search for Interns by Name.."}
          />
        </div>

        <div className="flex gap-2 items-center justify-between relative">
          {/* Team */}
          <select
            value={filterByTeam}
            onChange={handleFilterByTeamChange}
            onFocus={() => setToggleFilterButton(false)}
            className="border border-[#CCC3D84D] py-2 text-[12px] rounded-lg focus:outline-none  focus:ring-1 focus:ring-[#0029F5]"
          >
            <option value="">All Teams</option>
            <option value="product">Products</option>
            <option value="engineering">Engineer</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>

          <button
            onClick={() => setToggleFilterButton((prev) => !prev)}
            className=" flex gap-2 border border-[#CCC3D84D] py-2 px-3 rounded-lg text-[12px]  text-[#455F87] leading-4 font-semibold"
          >
            <img src={filterIcon} alt="Filter Icon" />
            Filter
          </button>
          {toggleFilterButton && (
            <FilterBar
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          )}

          <button
            onClick={() => {
              clearState();
              setToggleFilterButton(false);
            }}
            className="border border-[#CCC3D84D] py-2 px-3 rounded-lg text-[12px]  text-[#455F87] leading-4 font-semibold"
          >
            Reset Filters
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-[12px] leading-4 text-[#001C3B] font-bold">
            {selectedUsers.length} Selected
          </p>
          <hr className=" h-4 border border-[#CCC3D866]" />
          <button className="text-[#630ED4] text-[12px] leading-4 font-bold">
            Bulk Assign
          </button>
          <button className="text-[#630ED4] text-[12px] leading-4 font-bold ml-2">
            Export
          </button>
        </div>
      </div>

      {/*Section Body*/}

      <UsersTable
        users={usersData}
        currentUsers={currentUsers}
        selectedUsers={selectedUsers}
        handleSelectAll={handleSelectAll}
        handleSelectUser={handleSelectUser}
        handleAssign={() => {}}
      />
      <div>
        {currentUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            selectedUsers={selectedUsers}
            handleSelectUser={handleSelectUser}
            handleAssign={() => {}}
          />
        ))}
      </div>

      {/*Section bottom*/}
      <div className="flex justify-between items-center px-6 mb-4 tracking-normal">
        <p className="text-[12px] leading-4 text-[#455F87]">
          Showing{" "}
          <span className="text-[12px] leading-[100%] font-bold text-[#001C3B]">
            {displayedUsers.length === 0 ? 0 : startIndex + 1} -{" "}
            {displayedUsers.length === 0
              ? 0
              : Math.min(startIndex + itemsPerPage, displayedUsers.length)}
          </span>{" "}
          of {displayedUsers.length} Interns
        </p>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Users;
