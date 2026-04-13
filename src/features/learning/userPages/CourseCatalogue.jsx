import React, { useState } from "react";
import Navbar from "../userComponents/Navbar";
import UserCourseCatalogueSidebar from "../userComponents/UserCourseCatalogueSidebar";
import  UserCourses from "../userComponents/UserCourses";


const CourseCatalogue = () => {
  const [category, setCategory] = useState("All");
  

  return (
    <div className="min-h-screen pt-25" >
      <div className="flex justify-between">
        <UserCourseCatalogueSidebar
          setCategory={setCategory}
          selectedCategory={category}
        />

        <div className=" ">
          <UserCourses selectedCategory={category} />
        </div>
      </div>
    </div>
  );
};

export default CourseCatalogue;
