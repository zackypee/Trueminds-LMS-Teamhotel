import { addLesson } from "../../api/instructorApi";
import { useState } from "react";


const useAddLesson = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)

    const handleAddLesson = async (courseId, lessonData) =>{

        try{
            setIsLoading(false);
            setError(null);
            setSuccess(null);

            const response = await addLesson(courseId, lessonData);

            if(!response?.success){
                setError(response.message || "Something went wrong, please try again");
            };

            setTimeout(()=>{
                setSuccess(response.message);
            }, 300)
            
            return true;

        }catch(err){

            const message = err.response?.data?.message 
            || (err.message === "Network Error" ? "Check your internet connection" : "Something went wrong, try again.");
            
            setError(message)
            return false

        }finally{
            setIsLoading(false)
        }

    }

    return{ isLoading, error, success, handleAddLesson};

}

export default useAddLesson;