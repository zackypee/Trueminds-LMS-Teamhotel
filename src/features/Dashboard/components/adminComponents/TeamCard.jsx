import productIcon from "../../../../assets/product-team-icon.svg";
import engineeringIcon from "../../../../assets/engineering-team-icon.svg";
import designIcon from "../../../../assets/design-team-icon.svg";
import marketingIcon from "../../../../assets/marketing-team-icon.svg";

const teamIcon = {
    product: productIcon,
    engineering: engineeringIcon,
    design: designIcon,
    marketing: marketingIcon,
}

const TeamCard = ({ teamName, members }) => {
  return (
    <div className=" border border-[#CCC3D833] p-4 rounded-xl">
        <div className="flex items-start mb-4 tracking-normal" >
            <img src={teamIcon[teamName.toLowerCase()]} alt="Team Avatar" className=" " /> 
            <div className="ml-4">
                <h3 className="text-[14px] font-bold leading-5 text-[#1F2937]">{teamName}</h3>
                <p className="text-[#455F87] text-[11px] leading-[16.5px]">{members.length} Active Members</p>
            </div>
        </div>
        
        <div className="flex items-center justify-start"> 
            {members.slice(0, 2).map((member, index) => (
                <img key={index} src={member.img} alt="Member Avatar" className={`w-7 h-7  border-2 border-white rounded-full ${index !==0? '-ml-1.5' : ''}`}  />
            ))}
           {members.length > 2 && (
            <p className="text-gray-600 flex items-center justify-center tracking-normal text-[9px] font-bold leading-[13.5px] w-7 h-7 rounded-full border-2 border-white bg-[#E5E7EB] -ml-1.5" > + { members.length - 2 }</p>
           )}
        </div>
    </div>
  )
}

export default TeamCard;