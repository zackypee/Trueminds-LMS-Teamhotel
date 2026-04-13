import React, { useState } from "react";
import Navbar from "../../Dashboard/components/Navbar";
import UserCourseCatalogueSidebar from "../userComponents/UserCourseCatalogueSidebar";
import  UserCourses from "../userComponents/UserCourses";

const CourseCatalogue = () => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen pt-25" >
      <div className="flex justify-between">
        <UserCourseCatalogueSidebar
          setCategory={setCategory}
          selectedCategory={category}
        />

        <div className=" ">
          <UserCourses selectedCategory={category} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default CourseCatalogue;
