
import React, { useState } from "react";
import UserCourseCatalogueSidebar from "../userComponents/UserCourseCatalogueSidebar";
import  UserCourses from "../userComponents/UserCourses";
import useGetAllCourses from "../userHooks/useGetAllCourses";
import LoadingState from "../../../components/LoadingState";
import ErrorMessage from "../../../components/ErrorMessage";


const CourseCatalogue = () => {
  const [category, setCategory] = useState("All");
  const { courses, loading, error, success } = useGetAllCourses();

  console.log("Course", courses)
  console.log("Success", success)

  if(loading){
    return(
      <LoadingState/>
    )
  }

  if(error){
    return(
      <ErrorMessage message={error}/>
    )
  }
  

  return (
    <div className="min-h-screen " >
      <div className="flex justify-between gap-4">
        <UserCourseCatalogueSidebar
          setCategory={setCategory}
          selectedCategory={category}
        />

        <div className=" ">
          <UserCourses selectedCategory={category} allCourses={courses} />
        </div>
      </div>
    </div>
  );
};

export default CourseCatalogue;
