import { useState } from "react"
import { FaStar} from "react-icons/fa";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
export default function CourseOutline() {
const list=[
    {
      name:"Class 1: Onboarding Session",
      time:"2:01"
    },{
        name:"Class 2: Introduction to UI/UX",
        time:"5:14"
    },{
        name:"Class 3: Learning about User Experience",
        time:"8:12"
    },{
        name:"Class 4: Design Principles",
        time:"4:03"
    },{
        name:"Class 5: Fundamentals in UX",
        time:"6:03"
    },{
       name:"Class 6: What is UI?",
        time:"3:20" 
    },{
        name:"Class 7: The Importance of UI",
        time:"1:50"
    },{
        name:"Class 8: Differences between UI and UX",
        time:"7:22"
    },{
        name:"Class 9: Figma",
        time:"10:19"
    },{
        name:"Class 10: Wireframes & Lowfi",
        time:"7:22"
    },{
        name:"Class 11: Design Systems",
        time:"3:18"
    },{
        name:"Class 12: High Fidelity",
        time:"9:28"
    },{
         name:"Class 13: Micro-interactions and Prototyping",
        time:"12:36"
    }
]
const [showMore, setShowMore]= useState(false)
const [readMore, setReadMore] = useState(false);
const aboutText = "This course is designed to introduce you to the core principles of product design, with a strong focus on UI/UX fundamentals. You will learn how to think like a designer by understanding user needs, defining problems, and creating intuitive, user-centered solutions. From wireframing and prototyping to visual design and usability testing, the course walks you through the entire design process step by step.Whether you are completely new or transitioning into design, you will gain practical skills using industry tools, learn how to structure clean and functional interfaces, and understand the logic behind great user experiences. By the end of the course, you will be able to confidently design simple digital products and build a solid foundation for advancing your UI/UX career."
    return(
    <div className="px-8 py-4 mt-20">
       
        <img className="object-cover object-top h-110 m-auto rounded-t-4xl" src="/images/924ef9b2d1a38298225a32ace1af4e60d1952536.jpg" alt="" />
     

       <div className="flex flex-col md:flex-row  md:justify-between gap-10 w-full">
       <div className="w-full">
       <div className="flex items-center gap-4 mt-8 mb-4">



            {/* IMAGE */}

            <img

            className="w-10 h-10 rounded-full object-cover"

            src="/images/858e65c3fcc3536394e0e854a0d52952787f5f1d.jpg"

            alt=""

            />



            {/* TEXT */}

            <div className="flex flex-col w-full">



            {/* TOP ROW */}

            <div className="flex justify-between items-center">

            <p className="text-[20px] font-semibold">John Ameh</p>

            <p className="text-[16px]">4hr 24min</p>

            </div>



            {/* BOTTOM ROW */}

            <div className="flex justify-between items-center">

            <p className="text-[14px]">Certified mentor</p>



            <div className="flex items-center gap-1">

            <FaStar />

            <p className="font-semibold">4.2</p>

            </div>

            </div>



        </div>

    </div>
          <div className="bg-[#0D94880A] p-4 rounded ">
           <h4 className="text-[24px] font-semibold mb-4 text-[#000000]">Course Outline</h4> 
           <p className="text-[16px] mb-4 font-semibold">13 Lessons</p>
           <div>
            <ul className="flex flex-col gap-4">
                {(showMore ? list : list.slice(0,5)).map((item)=>(
                    <div key={item.name}>
                    <li className="flex justify-between items-center">
                        <p className="text-[16px] ">{item.name}</p>
                        <p className="text-[14px] font-semibold">{item.time}</p>
                    </li>   
                    </div>
                ))}
            </ul>
            <div onClick={()=> setShowMore(!showMore)}>
                {showMore ? (<div className="flex items-center">
              
                <p className="text-[16px] text-[#7C3AED]">Read Less</p>
                  <RiArrowDropUpLine className="text-[16px] text-[#7C3AED]" />
            </div>):(
               <div className="flex items-center">
                
                <p className="text-[16px] text-[#7C3AED]">Read More</p>
                <RiArrowDropDownLine  className="text-[26px] text-[#7C3AED]"/>
            </div> 
                )}
            </div>
           </div>
        </div>
       </div>
         
        <div className="w-full mt-8 bg-[#F0F3FF]/36 p-4 rounded">

            <h3 className="text-[24px] font-semibold mb-4">About this Course</h3>
            <p className="text-[16px] text-[#000000] font-normal leading-[28.8px] ">
            {readMore ? aboutText : aboutText.slice(0, 408)}...
            </p>
            <p onClick={() => setReadMore(!readMore)} >
            {readMore ?(<div className="flex items-center">
              
                <p className="text-[16px] text-[#7C3AED]">Read Less</p>
                  <RiArrowDropUpLine className="text-[16px] text-[#7C3AED]" />
            </div>):(
               <div className="flex items-center">
                
                <p className="text-[16px] text-[#7C3AED]">Read More</p>
                <RiArrowDropDownLine  className="text-[26px] text-[#7C3AED]"/>
            </div> 
            ) }
            </p>
        </div>
       </div>
        
    </div>
      
        
)
}