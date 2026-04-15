import React from 'react'
import EditProfileDetails from '../userComponents/EditProfileDetails'
import EditProfessionalDetails from '../userComponents/EditPersonalDetails'

export default function UserEditProfile() {
  const handleSave   = () => console.log('Save clicked')
  const handleCancel = () => console.log('Cancel clicked')

  return (
    <div className="min-h-screen bg-[#F4F6FA] px-4 py-6 md:px-8 md:py-10">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#001C3B] leading-tight">Edit Profile</h1>
        <p className="text-sm text-[#455F87] mt-1">
          Manage your professional identity and learning preferences.
        </p>
      </div>

      {/* Responsive layout: stacked on mobile → side-by-side on lg */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <EditProfileDetails />
        <EditProfessionalDetails onSave={handleSave} onCancel={handleCancel} />
      </div>

    </div>
  )
}