"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const DisplayMessage = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [hiding, setHiding] = useState(false);

  const handleClose = () => {
    setHiding(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 500);
  };

  return (
    <>
      {showMessage && (
        <div
          className={`
            overflow-hidden
            transition-all duration-500 ease-in-out
            ${hiding ? "max-h-0 opacity-0" : "max-h-25 opacity-100"}
          `}
        >
          <div
            className={`
              bg-black text-[#F0F8FF]
              flex justify-center items-center text-center
              font-medium text-sm min-h-8 p-2
              transition-transform duration-500 ease-out
              ${hiding ? "-translate-y-full" : "translate-y-0"}
            `}
          >
            <span className="daMessage flex-2 font-sans">
              &lt;&lt; Cosmoc is a student's project, So there's nothing
              generic. It's an unofficial website &gt;&gt;
            </span>

            <X
              onClick={handleClose}
              className="cursor-pointer ml-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayMessage;
