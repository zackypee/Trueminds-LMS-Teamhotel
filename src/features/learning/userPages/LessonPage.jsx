import LessonContent from "../userComponents/LessonContent"
import CourseSidebar from "../userComponents/CourseSidebar"
import { useState } from "react"
import lessons from "../lessonsData"

const LessonPage = () => {
    const [activeLessonIndex, setActiveLessonIndex] = useState(0);
    const [completedLessons, setCompletedLessons] = useState([]);


    const currentLesson = lessons[activeLessonIndex];
    const totalLessons = lessons.length;
    const completedCount = completedLessons.length;
    const progress = (completedCount / totalLessons) * 100;
    const currentLessonNumber = activeLessonIndex + 1;


    const handleCompleteLesson = () => {
        if (!completedLessons.includes(activeLessonIndex)) {
            setCompletedLessons((prev) => [...prev, activeLessonIndex]);
        }
    };
    const handleNextLesson = () => {
        if (activeLessonIndex < lessons.length - 1) {
            setActiveLessonIndex((prev) => prev + 1);
        }
    };

    return(
        <div className="flex justify-between w-full pl-60">
            <CourseSidebar 
             activeLessonIndex={activeLessonIndex}
             setActiveLessonIndex={setActiveLessonIndex}
             completedLessons={completedLessons}
             lessons={lessons}
            />
            <LessonContent 
              currentLesson={currentLesson}
              activeLessonIndex={activeLessonIndex}
              completedLessons={completedLessons}
              setCompletedLessons={setCompletedLessons}
              handleCompleteLesson={handleCompleteLesson}
              handleNextLesson={handleNextLesson}
              progress={progress}
              currentLessonNumber={currentLessonNumber}
              totalLessons={totalLessons}
            />
        </div>
    )
}

export default LessonPage;