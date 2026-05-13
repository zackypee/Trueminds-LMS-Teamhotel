const LessonForm = ({ onSubmit, lessonData, handleChange, handleContentChange, addLessonSection, removeLessonSection}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(lessonData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label className="block text-sm font-bold text-[#1F2937] mb-2">
                    Module Title
                </label>
                <input type="text" name="title" value={lessonData.title} onChange={handleChange} placeholder="Lesson Title" required
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-bold text-[#1F2937] mb-2">
                   Module Overview
                </label>
                <textarea name="overview" value={lessonData.overview} onChange={handleChange}
                  placeholder="Provide insights on the module, what the learner will be coming across by the end of the module study."
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none"
                />
            </div> 
            <div className="mb-6 border-y border-y-[#E5E7EB] py-4" >
                <p className="text-lg font-bold text-[#1F2937] mb-4">Module Content</p> 
                {lessonData.content.map((section, index) => (
                    <div key={index} className="mb-4 p-4 border border-[#E5E7EB] rounded-lg">
                        <h4 className="block text-sm font-bold text-[#1F2937] mb-2">
                            Section {index + 1}
                        </h4>
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-[#1F2937] mb-2"> 
                                Topic
                            </label>
                            <input type="text" value={section.topic} onChange={(e) => handleContentChange(index, "topic", e)} placeholder="Topic" required
                            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none mb-4"   
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-[#1F2937] mb-2">
                                Content
                            </label>
                            <textarea value={section.content} onChange={(e) => handleContentChange(index, "content", e)} placeholder="Content" required
                            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-[#1F2937] mb-2">
                                Resource Link
                            </label>
                            <input type="text" value={section.link} onChange={(e) => handleContentChange(index, "link", e)} placeholder="Resource Link" 
                            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none"
                            />
                        </div>
                        <button type="button" onClick={() => removeLessonSection(index)} 
                         disabled={lessonData.content.length === 1}
                         className="bg-[#EF4444] text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ml-auto block"
                        >Remove Section</button>
                    </div>
                ))}
                <button type="button" onClick={addLessonSection} className="bg-[#10B981] text-white px-4 py-2 rounded-lg ml-auto block mr-6">
                    Add Section
                </button>
            </div>
            <div className="mb-6">
                <label className="block text-sm font-bold text-[#1F2937] mb-2">
                    Tips for Learners
                </label>
                <textarea name="tips" value={lessonData.tips} onChange={handleChange} placeholder="Tips for Learners" className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none" />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-bold text-[#1F2937] mb-2">
                    Best Practices
                </label>
                <textarea name="bestPractice" value={lessonData.bestPractice} onChange={handleChange} placeholder="Best Practices" className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none" />
            </div>  
            <div className="mb-6">
                <label className="block text-sm font-bold text-[#1F2937] mb-2">
                    Conclusion
                </label>
                <textarea name="conclusion" value={lessonData.conclusion} onChange={handleChange} placeholder="Conclusion" className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#1F2937] outline-none h-36 resize-none" />
            </div>  
            <div className="flex flex-col gap-4 md:flex-row md:justify-end md:items-center mt-2">
            <button
              type="button"
              className="text-[#0029F5] text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#EDE9FE] transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-[#0029F5] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors"
            >
              Publish Module
            </button>
          </div>
        </form>
    )       
         
}


export default LessonForm;