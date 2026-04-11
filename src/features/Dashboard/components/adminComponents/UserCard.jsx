const UserCard = ({user, selectedUsers, handleSelectUser, handleAssign}) => {
    return(
        <div  className=" block w-[70%] 
            border border-[#E5E7EB] py-3 px-4 rounded-xl md:px-6 
            md:py-6
            m-auto mt-4 min-[1150px]:hidden">
            <div className="flex items-center gap-3 pl-4 md:pl-8">
                <img src={user.img} alt={`${user.name}'s avatar`} className="w-8 h-8 rounded-full object-cover" />
                <div>
                    <p className="text-[#001C3B] text-[14px] font-semibold tracking-normal leading-5">{user.name}</p>
                    <p className="text-[#455F87] text-[11px] tracking-[normal] leading-[100%]">{user.email}</p>
                
                </div>
            </div>
            <input
                className=" accent-purple-600 border border-[#E5E7EB] rounded"
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={() => handleSelectUser(user.id)}
                aria-label={`Select ${user.name}`}
            />
            <div className="grid grid-rows-2 border border-amber-400 grid-cols-2 gap-2 md:pl-8">

                <label className="text-[#6B7280] text-[14px]  tracking-normal leading-5.25 ">
                    Role
                    <p className=" text-[12px]  tracking-normal leading-4 text-[#374151] font-medium">
                        {user.role}
                    </p>
                </label>
               <label className="text-[#6B7280] text-[14px]  tracking-normal leading-5.25 ">
                    Current Team
                    {user.team ? (
                    <p 
                        className={` 
                        ${user.team.toLowerCase() === "design"? "bg-[#FDF2F8] text-[#BE185D]" 
                        :user.team.toLowerCase()=== "engineering"? "bg-[#EEF2FF] text-[#0029F5]"
                        :user.team.toLowerCase()=== "marketing"? "bg-[#F0FDFA] text-[#0D9488]"
                        :"bg-[#FFF7ED] text-[#EA580C]"
                        }  rounded-sm text-[12px] font-bold w-fit py-0.5 px-2`
                        }
                    >
                        {user.team}
                    </p>) : (
                    <p 
                        className=" rounded-sm w-fit text-[12px] font-bold bg-[#E7EEFF] text-[#4B5563] py-0.5 px-2"
                    >
                        Unassigned
                    </p>)}
                </label>

                <label className="text-[#6B7280] text-[14px]  tracking-normal leading-5.25 ">
                    Status
                    <p className=" ">
                        {user.isActive? (
                            <span className="text-[12px]  tracking-normal leading-4 text-[#374151] font-medium">Active</span>
                        ) : (
                            <span className="text-[#F59E0B] flex items-center gap-2" > <span className="w-2 h-2 rounded-full bg-[#EA580C] inline-block"></span>Pending</span>
                        )}
                    </p>
                </label>

                <button
                    type="button"
                    className={`w-fit ml-10 justify-end tracking-normal font-bold text-[12px] leading-4  px-4 py-1.5 hover:underline ${!user.isActive? `bg-[#0029F5] text-[#FFFFFF] rounded-lg` : `text-[#0029F5] `}`}
                    onClick={() => handleAssign(user.id)}
                >
                  Assign
                </button>
            </div>
           

        </div>
        
    );
};

export default UserCard;