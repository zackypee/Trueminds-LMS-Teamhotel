const UsersTable = ({ users, currentUsers, selectedUsers, handleSelectAll, handleSelectUser, handleAssign }) => {
    const tableHeaders = ["Name & Identity", "Role", "Current Team", "Status", "Actions"];


    return (
        <table className=" hidden w-full min-[1150px]:block ">
            <thead className="bg-[#F0F3FF1A]">
                <tr className="text-left">
                    <th className="pl-20">
                        <input
                           className=" accent-purple-600 border border-[#E5E7EB] rounded"
                            
                            type="checkbox"
                            checked={selectedUsers.length === users.length}
                            onChange={handleSelectAll}
                            aria-label="Select all users"
                        />
                    </th>
                    {tableHeaders.map((header) => (
                        <th key={header} className=" text-[#6B7280] text-[14px] font-medium tracking-normal leading-5.25 py-4.5 px-6">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {currentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-[#CCC3D81A] hover:bg-gray-50 ">
                        {/* Checkbox */}
                        <td className="pl-20">
                            <input
                                className=" accent-purple-600 border border-[#E5E7EB] rounded"
                                type="checkbox"
                                checked={selectedUsers.includes(user.id)}
                                onChange={() => handleSelectUser(user.id)}
                                aria-label={`Select ${user.name}`}
                            />
                        </td>
                        {/* Name */}
                        <td className="py-4.5 px-6">
                            <div className="flex items-center gap-3">
                                <img src={user.img} alt={`${user.name}'s avatar`} className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                  <p className="text-[#001C3B] text-[14px] font-semibold tracking-normal leading-5">{user.name}</p>
                                  <p className="text-[#455F87] text-[11px] tracking-[normal] leading-[100%]">{user.email}</p>
                                
                                </div>
                            </div>
                        </td>
                        {/* Role */}
                        <td className="py-4.5 px-6 text-[14px]  tracking-normal leading-5 text-[#455F87]">
                            {user.role}
                        </td>
                        {/* Team */}
                        <td className="py-4.5 px-6 tracking-normal leading-[100%]">
                            {user.team ? (
                                <span  
                                 className={` 
                                   ${user.team.toLowerCase() === "design"? "bg-[#FDF2F8] text-[#BE185D]" 
                                   :user.team.toLowerCase()=== "engineering"? "bg-[#EEF2FF] text-[#0029F5]"
                                   :user.team.toLowerCase()=== "marketing"? "bg-[#F0FDFA] text-[#0D9488]"
                                   :"bg-[#FFF7ED] text-[#EA580C]"
                                   } py-1 px-2.5 rounded-full text-2.5 font-bold`
                                   }
                                >
                                    {user.team}
                                </span>
                            ) : (
                                <span 
                                 className=" py-1 px-2.5 rounded-full text-2.5 font-bold bg-[#E7EEFF] text-[#1E3A5F]"
                                >
                                    Unassigned
                                </span>
                            )}
                        </td>
                        {/* Status */}
                        <td className={`py-4.5 ${user.isActive? `px-6` : `px-2`}`}>
                            {user.isActive? (
                                <span className="text-[#001C3B]">Active</span>
                            ) : (
                                <span className="text-red-500 flex items-center gap-2" > <span className="w-2 h-2 rounded-full bg-[#EA580C] inline-block"></span>Pending</span>
                            )}
                        </td>
                        {/* Action */}
                        <td className="py-4.5 px-6">
                            <button
                                className={` tracking-normal font-bold text-[12px] leading-4  px-4 py-1.5 hover:underline ${!user.isActive? `bg-[#0029F5] text-[#FFFFFF] rounded-lg` : `text-[#0029F5]`}`}
                                onClick={() => handleAssign(user.id)}
                            >
                                Assign
                            </button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;   
