const TeamAllocPageHeader = () => {
  return (
   <section className=" flex gap-y-4 flex-col team-alloc-page-header font-[Inter] tracking-normal min-[1050px]:flex-row  min-[1050px]:items-end justify-between relative">
      <div className="content tracking-normal b"> 
         <h2 className=" font-semibold font-[Inter] text-[24px] leading-[33.6px] text-[#1F2937]">Team Allocation</h2>
         <p className="alloc-page-description text-[#6B7280] text-[14px] leading-5.25">Assign interns to specialized squads and manage onboarding workflows.</p>
      </div>
   
      <div className="import-section  flex justify-center ">
         <button className="import-button text-[#630ED4] font-semibold text-[14px] leading-5.25 background-none py-1.5 px-4" >Bulk Import CSV</button>
         <div className="import-info  max-[768px]:absolute top-0 right-[0%] min-[768px]:border-l border-[#CCC3D84D] pl-3 ml-2  " >
            <p className="font-bold text-[10px] text-[#001C3B] leading-3.75 text-right">LAST IMPORT</p>
            <p className="text-[10px] text-[#455F87] leading-3.75 text-right">42 Users . 2m ago</p>  
         </div>
      </div>
   </section>
  );
};

export default TeamAllocPageHeader;