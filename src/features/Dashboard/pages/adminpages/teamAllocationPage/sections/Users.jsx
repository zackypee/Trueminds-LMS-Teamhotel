import { users } from "./TeamOverview";
import UsersTable from "../../../../components/adminComponents/UsersTable";
import SearchBar from "../../../../components/adminComponents/SearchBar";
import filterIcon from "../../../../../../assets/filter-icon.svg"

const Users = () => {
    return (
        <section className="users-section border border-[#CCC3D833] rounded-2xl ">
            {/*Section Header*/}
            <div className="flex items-center justify-between p-5 border-b border-[#CCC3D81A] bg-[#F0F3FF33]">
                <div className="search-container flex items-center justify-between gap-4">
                  <SearchBar/>
                  <button className=" flex gap-2 border border-[#CCC3D84D] py-2 px-3 rounded-lg text-[12px]  text-[#455F87] leading-4 font-semibold"> <img src={filterIcon} alt="Filter Icon"/>Filter</button>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <p className="text-[12px] leading-4 text-[#001C3B] font-bold">8 Selected</p>
                    <hr className=" h-4 border border-[#CCC3D866]"/>
                    <button className="text-[#630ED4] text-[12px] leading-4 font-bold">
                        Bulk Assign
                    </button>
                    <button className="text-[#630ED4] text-[12px] leading-4 font-bold ml-2">
                        Export
                    </button>
                </div>
            </div>

            {/*Section Body*/}
            <UsersTable users={users} selectedUsers={[]} handleSelectAll={() => {}} handleSelectUser={() => {}} handleAssign={() => {}} />            
           
           {/*Section bottom*
           <div>
              <p>Showing <span>1-10</span> of 54 Interns</p>
           </div>*/}
        </section>
    );
}

export default Users;