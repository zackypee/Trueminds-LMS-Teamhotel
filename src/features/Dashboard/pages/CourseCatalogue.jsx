import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCatalogueSidebar from "../components/CourseCatalogueSidebar";
import Courses from "../components/Courses";

const CourseCatalogue = () => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="overflow-y-scroll overflow-x-scroll scrollbar-hide">
      <Navbar setSearchQuery={setSearchQuery} />

      <div className="flex">
        <CourseCatalogueSidebar
          setCategory={setCategory}
          selectedCategory={category}
        />

        <Courses selectedCategory={category} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default CourseCatalogue;
