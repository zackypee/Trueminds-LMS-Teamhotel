/*
import React, { useState } from "react";
import Navbar from "../userComponents/Navbar";
import UserCourseCatalogueSidebar from "../userComponents/UserCourseCatalogueSidebar";
import UserCourses from "../userComponents/UserCourses";

const CourseCatalogue = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen md:pt-25">
      <div className="md:flex justify-between">
        <UserCourseCatalogueSidebar
          setCategory={setCategory}
          selectedCategory={category}
        />

        <div className=" ">
          <UserCourses selectedCategory={category} setCategory={setCategory} />
        </div>
      </div>
    </div>
  );
};

export default CourseCatalogue;
*/
import useGetAllCourses from "../userHooks/useGetAllCourses";
const CourseCatalogue = () => {
  const { courses, loading, error } = useGetAllCourses();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
        </div>
      ))}
    </div>
  )
}
export default CourseCatalogue;