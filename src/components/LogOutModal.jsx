import React from "react";
import logOutIcon from "../assets/logout-icon-orange.png";



export default function LogOutModal({onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-[#ffffff] items-center justify-center flex max-w-xs  gap-4 flex-col py-4 px-4 rounded-lg">
        <button>
          <img src={logOutIcon} alt="" />
        </button>
        <h1 className="text-[#1F2937] text-[24px] text-center">Are you sure you want to log out?</h1>
        <p className="text-[#6B7280] text-center text-sm">
          You'll need to enter your credentials again to access the platform.
        </p>
        <button 
        onClick={onConfirm}
        className="w-full bg-[#dc2727] text-[#FFFFFF] px-6 py-1.5 rounded-lg text-sm">Confirm</button>
        <button onClick={onClose} className="w-full bg-[#E5E7EB] text-[#001C3B] px-6 py-1.5 rounded-lg text-sm">
          Back
        </button>
      </div>
    </div>
  );
}
