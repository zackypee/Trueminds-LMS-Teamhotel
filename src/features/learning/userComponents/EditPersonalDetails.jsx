import React, { useState } from 'react'

const PersonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

const INITIAL_SKILLS = ['UI/UX Design', 'Figma', 'Wireframing']

const inputClass =
  'w-full bg-[#F3F5F8] rounded-xl px-4 py-3 text-sm text-[#1F2937] border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition placeholder:text-gray-400'

const labelClass = 'block text-xs font-medium text-[#6B7A95] mb-1.5'

export default function EditProfessionalDetails({ onSave, onCancel }) {
  const [skills, setSkills] = useState(INITIAL_SKILLS)
  const [addingSkill, setAddingSkill] = useState(false)
  const [newSkill, setNewSkill] = useState('')

  const removeSkill = (skill) => setSkills((prev) => prev.filter((s) => s !== skill))

  const confirmAddSkill = () => {
    const trimmed = newSkill.trim()
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed])
    }
    setNewSkill('')
    setAddingSkill(false)
  }

  return (
    <div className="flex-1 flex flex-col gap-5">

      {/* ── Personal Details ── */}
      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-base font-semibold text-[#001C3B] mb-5">
          <span className="text-blue-600"><PersonIcon /></span>
          Personal Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input type="text" defaultValue="Chika Okafor" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input type="email" defaultValue="hcik.okf@talentflow.edu" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input type="tel" defaultValue="+234 800 123 4567" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Location</label>
            <input type="text" defaultValue="Lagos, Nigeria" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Date of Birth</label>
            <input type="text" defaultValue="05/15/1995" className={inputClass} />
          </div>
        </div>
      </div>

      {/* ── Professional Details ── */}
      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-base font-semibold text-[#001C3B] mb-5">
          <span className="text-blue-600"><BriefcaseIcon /></span>
          Professional Details
        </h2>

        <div className="flex flex-col gap-5">
          {/* Bio */}
          <div>
            <label className={labelClass}>Bio</label>
            <textarea
              defaultValue="Passionate UI/UX Designer with a focus on creating accessible and human-centric digital experiences. Currently leveling up my skills in advanced prototyping and design systems at TalentFlow."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Primary Skills */}
          <div>
            <label className={labelClass}>Primary Skills</label>
            <div className="flex flex-wrap gap-2 items-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    aria-label={`Remove ${skill}`}
                    className="text-blue-400 hover:text-blue-800 font-bold leading-none mt-px"
                  >
                    ×
                  </button>
                </span>
              ))}

              {addingSkill ? (
                <input
                  autoFocus
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') confirmAddSkill()
                    if (e.key === 'Escape') { setAddingSkill(false); setNewSkill('') }
                  }}
                  onBlur={confirmAddSkill}
                  placeholder="Skill..."
                  className="text-xs px-3 py-1.5 rounded-full border border-blue-400 bg-white focus:outline-none w-24 text-blue-700"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setAddingSkill(true)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 px-3 py-1.5 rounded-full border border-dashed border-blue-400 hover:bg-blue-50 transition"
                >
                  + Add Skill
                </button>
              )}
            </div>
          </div>

          {/* Portfolio Link */}
          <div>
            <label className={labelClass}>Portfolio Link</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <LinkIcon />
              </span>
              <input
                type="url"
                defaultValue="https://behance.net/ChikaOkafor"
                className={`${inputClass} pl-9`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Action Buttons ── */}
      <div className="flex flex-col gap-3 pb-6">
        <button
          type="button"
          onClick={onSave}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl py-3.5 text-sm font-semibold transition-colors"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full bg-white hover:bg-gray-50 text-[#455F87] rounded-xl py-3.5 text-sm font-medium border border-gray-200 transition-colors"
        >
          Cancel
        </button>
      </div>

    </div>
  )
}