import LessonContent from "../userComponents/LessonContent"
import CourseSidebar from "../userComponents/CourseSidebar"

const LessonPage = () => {
    return(
        <div className="flex justify-between w-full">
            <CourseSidebar/>
            <LessonContent/>
        </div>
    )
}

export default LessonPage;