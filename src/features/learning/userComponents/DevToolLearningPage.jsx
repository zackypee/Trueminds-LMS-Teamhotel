import React from "react";
import heroDev from "../../../../src/assets/hero-dev.png"

export default function DevToolsLearningPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-10">

      {/* HERO SECTION */}
      <div className="mb-10">
       <div className="w-full flex items-center  justify-center">
         <img src={heroDev} className="max-w-lg content-center" alt="" />
       </div>
        <div className=" bg-[#0029F5] text-white rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Browser Developer Tools</h1>
          <p className="text-sm opacity-90">
            Learn how to inspect, debug and understand websites directly in your browser.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* WHAT ARE DEV TOOLS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">What are Dev Tools?</h2>
          <p className="text-sm text-gray-600">
            Developer tools are built-in features in your browser that let you inspect HTML,
            edit CSS, debug JavaScript, and analyze how a website works.
          </p>
        </div>

        {/* HOW TO OPEN */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">How to Open Dev Tools</h2>
          <p className="text-sm text-gray-600">
            Press <span className="font-medium">F12</span> or{" "}
            <span className="font-medium">Ctrl + Shift + I</span> (Windows) or{" "}
            <span className="font-medium">Cmd + Option + I</span> (Mac).
          </p>
        </div>

        {/* INSPECTOR */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">Inspector (Elements)</h2>
          <p className="text-sm text-gray-600">
            Lets you view and edit HTML and CSS in real time. You can click any element
            on a page and see how it is built.
          </p>
        </div>

        {/* CONSOLE */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">Console</h2>
          <p className="text-sm text-gray-600">
            Used to run JavaScript and see errors. Helpful for debugging and testing small code snippets.
          </p>
        </div>

        {/* DEBUGGER */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">Debugger</h2>
          <p className="text-sm text-gray-600">
            Allows you to pause your code and inspect variables step-by-step to find issues.
          </p>
        </div>

        {/* NETWORK */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">Network</h2>
          <p className="text-sm text-gray-600">
            Shows all requests made by a website, including APIs, images, and load times.
          </p>
        </div>

      </div>

    </div>
  );
}