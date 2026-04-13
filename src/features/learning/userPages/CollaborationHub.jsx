import { FaSlack } from "react-icons/fa"
import { TbBrandZoom } from "react-icons/tb"
import { RiDriveLine } from "react-icons/ri"
import { IoSendOutline } from "react-icons/io5"
import { BiError } from "react-icons/bi"
export default function CollaborationHub(){
    const items=[{
        img:"/images/6cb21922133c0597b2171e3893fad88d98dcaf53.jpg",
        name:'Olarotimi Blessing',
        role:'Graphic Designer'
    },{
        img:"/images/0fa2696cc5a1a42d64027784c2d8ca21f58f55db.jpg",
        name:'Mohammed Dauda',
        role:'Frontend Developer'
    },{
        img:"/images/a959c5d9beda0b61b1f9f67f2574c1102ec1a8e6.jpg",
        name:'Eze Chika',
        role:'Project Manager'
    },{

        img:"/images/ae4ae3678c605bb36aafda87c64c9ae99f8b9bdb.jpg",
        name:'Fadeyi Olamide',
        role:'Backend Developer'
    },{
       img:"/images/9ecf654c831627a4df21074ddac931ccf79988a3.jpg",
        name:'Godswill Oluchi',
        role:'UI/UX Designer'  
    },{
         img:"/images/25517361f997cd145f26f94c0bf6c93b77810c2b.jpg",
        name:'Ahmad Aminu',
        role:'Graphic Designer'
    },{
        img:"/images/8c8177f8efbe1c38094378a131797592d42bca35.jpg",
        name:"Aina Tobiloba",
        role:"Frontend Developer"
    },{
        img:"/images/f0c062c0b4f24e2e9523857e717f0015ec807dd2.jpg",
        name:"Ejike Michael",
        role:"Project Manager"
    },{
        img:"/images/14b550f0094c8ceadbef661cde51453cc63a745d.jpg",
        name:"Ayoola Bukola",
        role:"Backend Developer"
    },{
        img:"/images/2361b744e8aa26a95a6851176badc83e156fa38d (1).jpg",
        name:"Babalola Zainab",
        role:"UI/UX Designer"
    }]
    return(
        <>
        <div className=" fixed left-0 right-0 mt-16 px-5 md:px-10 pt-5 md:pt-10 md:mb-5 pb-2 md:pb-5 bg-[#1E3A5F]" >
          <h1 className="font-bold md:mb-5 mb-4  text-white text-[24px] md:text-[36px]">Collaboration Hub</h1>
        </div>
      <div className="px-4 mt-60 md:px-6 mb-10">
        <div className="flex flex-col md:flex-row rounded md:rounded-2xl md:py-6 md:px-4 px-4 py-2 border-[#D97706] md:justify-between border">
            <div className="mb-2 md:flex md:gap-4 md:items-center">
                <BiError className="text-2xl  text-[#D97706] "/>
            <p className="text-[#1F2937] text-[13px] md:text-[18px] leading-5">Reminder: Week 3 project submission deadline is friday, March 28th, before 11:59pm</p>
            </div>
           
            <p className="text-[#7C3AED] text-[13px] md:text-[14px] font-semibold">View all</p>
        </div>
        <div className="mb-2 mt-4 md:mt-8">
            <p className="text-[#1F2937] text-[18px] md:text-[20px] font-semibold">Your Tools</p>
            <p className="text-[13px] md:text-[16px] text-[#6B7280]">Access your collaboration tools</p>
        </div>
        <div className="flex flex-col md:gap-4 justify-center md:flex-row md:justify-between items-center gap-2 mt-4">
            <div className="flex flex-col border w-full justify-center py-3 md:py-12 md:rounded-2xl items-center rounded border-[#E5E7EB] ">
                <div className="flex items-center mb-1 gap-1 md:gap-2">
                <FaSlack className="text-xl md:text-2xl text-[#4A154B]"/>
                <p className="text-[#1F2937] text-[14px] font-semibold md:text-[20px]">Slack</p>
                </div>
                <p className="text-[13px] text-[#6B7280] md:text-[14px]">Open Slack</p>
            </div>

            <div className="flex flex-col border md:py-12 md:rounded-2xl w-full justify-center py-3 items-center rounded border-[#E5E7EB] ">
                <div className="flex items-center mb-1 gap-1 md:gap-2">
                <img className="w-[28px] h-[28px] md:w-[40px] md:h-[40px]" src="/images/3ab00b467c8bd9f8f32337a4b62fe69d9e1f1272.png" alt="" />
                                <p className="text-[#1F2937] text-[14px] md:text-[20px] font-semibold">Zoom</p>
                </div>
                <p className="text-[13px] md:text-[14px] text-[#6B7280]">Open Zoom</p>
            </div>

            <div className="flex flex-col border  md:py-12 md:rounded-2xl w-full justify-center py-3 items-center rounded border-[#E5E7EB] ">
                <div className="flex items-center mb-1 gap-1 md:gap-2">
                <RiDriveLine className="text-xl md:text-2xl text-[#1A73E8]"/>
                <p className="text-[#1F2937] text-[14px] font-semibold md:text-[20px]">Google Drive</p>
                </div>
                <p className="text-[13px] text-[#6B7280] md:text-[14px]" >Open Drive</p>
            </div>
        </div>
        <div className="mb-2 md:mb-4  mt-4 md:mt-8">
            <p className="text-[#1F2937] text-[18px] font-semibold" >Your Team</p>
            <p className="text-[13px] text-[#6B7280]">Your allocated team members</p>
        </div>
        <div className="flex flex-col-reverse md:justify-between md:gap-8 md:items-start md:flex-row">
            <div className="grid grid-cols-1 gap-4  md:grid-cols-2 rounded-2xl md:w-1/2 p-4 border border-[#E5E7EB] ">
            {items.map(i=>(
                <div key={i.name} >
                <div className="flex gap-2 ">
                  <img src={i.img} className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#0029F5] rounded-full object-cover" alt="image" />
                    <div >
                      <p className="text-[#1F2937] text-[13px] md:text-[14px] font-semibold">{i.name}</p>
                      <p className="text-[12px] text-[#6B7280] md:text-[14px]">{i.role}</p>
                    </div>
                </div>
   
                </div>
            ))}
            </div>
            <div className="border mb-5 border-[#E5E7EB] md:justify-between md:gap-4 md:bg-white   md:border-0 bg-[#F9FAFB] md:rounded md:w-1/2 flex justify-between items-center px-4 py-2 ">
                <input type="text" placeholder="send a message to our team" className="text-[#6B7280] md:focus:border-[#7C3AED] md:w-full md:p-2 md:border md:border-[#E5E7EB] outline-0 text-[14px] bg-[#F9FAFB]"/>
                <div className="md:p-2 rounded  md:border md:border-[#E5E7EB] md:bg-[#F9FAFB]">
                 <IoSendOutline className="text-[#6B7280] "/>
                </div>
               
            </div>
        </div>
    </div>
    </>
    )

}