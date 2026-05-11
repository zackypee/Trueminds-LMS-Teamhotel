import { useState } from "react";
import LessonForm from "../../components/instructorComponents/LessonForm";

const LessonFormPage = () => {
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

    const handleLessonSubmit = (lessonData) => {
        console.log("Lesson Data Submitted:", lessonData);
    }

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