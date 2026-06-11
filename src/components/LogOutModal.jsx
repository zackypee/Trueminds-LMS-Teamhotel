import React from "react";
import { createPortal } from "react-dom";
import logOutIcon from "../assets/logout-icon-orange.png";

export default function LogOutModal({ onClose, onConfirm }) {
  return createPortal(
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-xs flex flex-col items-center justify-center gap-4 py-4 px-4 rounded-lg">
        <button>
          <img src={logOutIcon} alt="" />
        </button>

        <h1 className="text-[#1F2937] text-[24px] text-center">
          Are you sure you want to log out?
        </h1>

        <p className="text-[#6B7280] text-center text-sm">
          You'll need to enter your credentials again to access the platform.
        </p>

        <button
          onClick={onConfirm}
          className="w-full bg-[#dc2727] text-white px-6 py-1.5 rounded-lg text-sm"
        >
          Confirm
        </button>

        <button
          onClick={onClose}
          className="w-full bg-[#E5E7EB] text-[#001C3B] px-6 py-1.5 rounded-lg text-sm"
        >
          Back
        </button>
      </div>
    </div>,
    document.body
  );
}