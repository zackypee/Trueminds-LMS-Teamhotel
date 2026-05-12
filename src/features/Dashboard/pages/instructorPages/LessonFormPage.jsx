import { useState } from "react";
import LessonForm from "../../components/instructorComponents/LessonForm";
import useAddLesson from "../../hooks/instructorHooks/useAddLesson";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoadingState from "../../../../components/LoadingState";
import ErrorMessage from "../../../../components/ErrorMessage";

const LessonFormPage = () => {
    const { handleAddLesson, isLoading, error, success } = useAddLesson();
    const { courseId } = useParams();
    const [lessonData, setLessonData] = useState({
        title: "",
        overview: "",
        content: [{
            topic: "",
            content: "",
            link:""
        }],
        tips: "",
        bestPractice: "",
        conclusion: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setLessonData(prev => ({...prev, [name]:value}));
    };

    const handleContentChange = (index, field, e) => {
        const { value } = e.target;
        const updatedContent = [...lessonData.content];
        updatedContent[index][field] = value;
        setLessonData(prev => ({ ...prev, content: updatedContent }));
        
    };

    const addLessonSection = () => {
          
        setLessonData(lesson => ({
            ...lesson,
            content: [...lesson.content, { topic: "", content: "", link: "" }]
        }))

    }

    const removeLessonSection = (index) => {
        if (lessonData.content.length === 1) return;

        setLessonData(lesson => ({
            ...lesson, 
            content: lesson.content.filter((_, i) => i !== index)
        }))
    }

    const handleLessonSubmit =  async (lessonData, courseId) => {
        console.log("Lesson Data Submitted:", lessonData);
       const response = await handleAddLesson(courseId, lessonData);
         if(response){
            Navigate(`/instructor/course/${courseId}`, { replace: true });
         }
    }
    
    if(isLoading) return <LoadingState/>
    if(error) return <ErrorMessage message={error} className="flex items-center justify-center h-full bg-white"/>
    if(success) return <p className="text-green-500 ">{success}</p>

    return (
        <div className="bg-white p-10 max-w-4xl">
            <h1 className="text-4xl font-bold text-[#1F2937] mb-2">
              Upload Course Modules
            </h1>
            <p className="text-sm text-[#6B7280] mb-10">
                Add module resources with URLs for video/file and module content.
            </p>
            <LessonForm 
             onSubmit={handleLessonSubmit}
             lessonData={lessonData}
             handleChange={handleChange}
             handleContentChange={handleContentChange}
             addLessonSection={addLessonSection}
             removeLessonSection={removeLessonSection}
               
            />
        </div>
    )
}

export default LessonFormPage;