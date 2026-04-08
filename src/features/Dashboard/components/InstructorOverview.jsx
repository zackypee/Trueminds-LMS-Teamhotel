import React from "react";
import searchIcon from "../../../assets/search-icon.png";
import historyIcon from "../../../assets/history-icon.png";
export default function () {
  return (
    <div className="flex flex-col ">
      <div>
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search students, courses..." id="" />
      </div>
      <div>
        <div>
          <h1>Instructor Dashboard</h1>
          <p>
            Welcome back, Instructor. Your learners are making great progress
            today.
          </p>
        </div>
        <div className="flex justify-between">
          <button>
            <img src={historyIcon} alt="" />
            <span></span>
          </button>
          <button>Full Report</button>
        </div>

        <div>
          <div>
            <div className="flex">
              <div>
                <img src="" alt="" />
                <h2>Upload Materials</h2>
                <p>
                  Add new videos, PDFs, orinteractive lessons to your course
                  library.
                </p>
                <button>Start Upload </button>
              </div>
              <div>
                <img src="" alt="" />
                <h2>Create Assignment</h2>
                <p>
                  Design quizzes, peer reviews, or final projects for your
                  current modules.
                </p>
                <button>Create assignment </button>
              </div>
            </div>
            <div className="flex ">
                <div>
                    <p>TOTAL STUDENT </p>
                    <p>1,284 <span>+12%</span></p>
                </div>
                <div>
                    <p>ACTIVE COURSES</p>
                    <p>14</p>
                </div>
                 <div>
                    <p>TOTAL STUDENT </p>
                    <p>68<span>+4%</span></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
