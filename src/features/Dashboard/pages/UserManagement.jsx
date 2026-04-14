import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { IoArchiveOutline } from "react-icons/io5";
import { AiOutlineStop } from "react-icons/ai";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.png";
import user4 from "../../../assets/user4.png";

const UserManagement = () => {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    role: "All Roles",
    status: "Active",
  });

  const users = [
    {
      imgg: user1,
      name: "Alex Rivera",
      email: "alex.rivera@talentflow.edu",
      role: "Learner",
      allocation: "UX Research Core (Cohort 2024-B)",
      status: "Active",
    },
    {
      imgg: user2,
      name: "Marcus Chen",
      email: "m.chen@talentflow.edu",
      role: "Instructor",
      allocation: "Backend Systems (Tech Faculty)",
      status: "Active",
    },
    {
      imgg: user3,
      name: "Sarah Jenkins",
      email: "s.jenkins@talentflow.edu",
      role: "Admin",
      allocation: "Global Operations (System Root)",
      status: "On Leave",
    },
    {
      imgg: user4,
      name: "Jordan Wu",
      email: "jordan.wu@talentflow.edu",
      role: "Learner",
      allocation: "Data Analytics (Cohort 2024-C)",
      status: "Active",
    },

    {
      imgg: user1,
      name: "Emily Carter",
      email: "e.carter@talentflow.edu",
      role: "Learner",
      allocation: "Product Design (Cohort 2024-A)",
      status: "Active",
    },
    {
      imgg: user2,
      name: "Daniel Park",
      email: "d.park@talentflow.edu",
      role: "Instructor",
      allocation: "Frontend Engineering (Tech Faculty)",
      status: "Active",
    },
    {
      imgg: user3,
      name: "Olivia Martinez",
      email: "o.martinez@talentflow.edu",
      role: "Admin",
      allocation: "Admissions (System Root)",
      status: "Inactive",
    },
    {
      imgg: user4,
      name: "Liam Johnson",
      email: "l.johnson@talentflow.edu",
      role: "Learner",
      allocation: "Cybersecurity (Cohort 2024-D)",
      status: "Active",
    },
    {
      imgg: user3,
      name: "Sophia Lee",
      email: "s.lee@talentflow.edu",
      role: "Learner",
      allocation: "AI & Machine Learning (Cohort 2024-E)",
      status: "On Leave",
    },
    {
      imgg: user2,
      name: "Noah Brown",
      email: "n.brown@talentflow.edu",
      role: "Instructor",
      allocation: "Cloud Computing (Tech Faculty)",
      status: "Active",
    },
    {
      imgg: user2,
      name: "Ava Patel",
      email: "a.patel@talentflow.edu",
      role: "Admin",
      allocation: "Finance Operations (System Root)",
      status: "Active",
    },
    {
      imgg: user4,
      name: "Ethan Davis",
      email: "e.davis@talentflow.edu",
      role: "Learner",
      allocation: "Mobile Development (Cohort 2024-F)",
      status: "Inactive",
    },
    {
      imgg: user1,
      name: "Mia Thompson",
      email: "m.thompson@talentflow.edu",
      role: "Learner",
      allocation: "UX Writing (Cohort 2024-B)",
      status: "Active",
    },
    {
      imgg: user3,
      name: "James Wilson",
      email: "j.wilson@talentflow.edu",
      role: "Instructor",
      allocation: "DevOps Engineering (Tech Faculty)",
      status: "Active",
    },
  ];

  //pagination
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className=" p-8 bg-[#F0F3FF80] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[36px] font-bold text-[#1F2937]">
          User Management
        </h1>
        <p className="text-[#4A4455] font-normal text-[16px] ">
          Orchestrate your learning ecosystem. Manage permissions, monitor
          progress, <br /> and scale your talent pools through a unified
          interface.
        </p>
      </div>

      {/* Filters */}
      <div
        className=" mb-8 grid grid-cols-4 gap-3 h-45"
        style={{ gridTemplateColumns: "3fr 1fr" }}
      >
        <div className="bg-[#0029F50D] p-5">
          <div className="  flex items-start gap-4">
            <div>
              <label
                htmlFor="search"
                className="text-[#455F87] font-semibold text-[12px] block mb-4"
              >
                SEARCH
              </label>
              <div className="bg-[#FFFFFF] rounded w-60 h-11 flex items-center gap-2 p-2.5">
                <IoIosSearch />
                <input
                  type="text"
                  id="search"
                  placeholder="Name, email"
                  className="border-none outline-none"
                  value={filters.name}
                  onChange={(e) =>
                    setFilters({ ...filters, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="role"
                className="text-[#455F87] font-semibold text-[12px] block mb-4 "
              >
                ROLE
              </label>
              <select
                className="rounded h-11 w-40 bg-[#FFFFFF] text-[#6B7280] text-[14px] font-medium"
                id="role"
                value={filters.role}
                onChange={(e) =>
                  setFilters({ ...filters, role: e.target.value })
                }
              >
                <option>All Roles</option>
                <option>Learner</option>
                <option>Instructor</option>
                <option>Admin</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="status"
                className="text-[#455F87] font-semibold text-[12px] block mb-4"
              >
                STATUS
              </label>
              <select
                className="rounded h-11 w-40 bg-[#FFFFFF] text-[#6B7280] text-[14px] font-medium"
                id="status"
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
              >
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <button className="bg-[#B5D0FD] h-11 w-[148.03px] mt-4 rounded-md text-[#3E5980] flex items-center gap-2 p-4">
            <IoFilterOutline />
            More Filters
          </button>
        </div>
        <div className="bg-[#1E3A5F] h-47.25 rounded-lg p-6">
          <h2 className="text-[#FFFFFF99] text-[12px] font-semibold ">
            QUICK ACTION
          </h2>
          <h1 className="text-[#FFFFFF] text-[20px] font-semibold">
            Scale your team further
          </h1>
          <button className="rounded w-full border border-[#E5E7EB] h-13.25 mt-4 text-[#FFFFFF] text-[14px] font-semibold flex items-center gap-3 justify-center">
            <FiUserPlus />
            Add New User
          </button>
        </div>
      </div>

      <div className="bg-[#ffffff] border-b border-[#E7EEFF] flex items-center justify-between h-19.5 mb-4 py-5 px-8">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border border-[#E5E7EB] rounded"></div>
          <span className="text-[#CCC3D84D]">|</span>
          <p className="text-[#1F2937] text-[14px] font-semibold">
            Bulk Actions
          </p>
          <p className="bg-[#455F871A] rounded h-6 w-17.25 text-[10px] text-[#6B7280] font-bold flex items-center justify-center">
            0 Selected{" "}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-[#6B7280] text-[14px] font-semibold flex items-center gap-2">
            <IoArchiveOutline color="#4A4455" />
            <p>Archive</p>
          </div>
          <div className="text-[#BA1A1A] text-[14px] font-semibold flex items-center gap-2">
            <AiOutlineStop color="#BA1A1A" />
            <p>Deactivate</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className=" bg-white rounded-md shadow overflow-hidden ">
        <div className="px-20">
          <table className="w-full text-left border-separate [border-spacing:0_16px]">
            {/* HEADER */}
            <thead className=" text-[#475569] text-[12px] font-bold ">
              <tr className="bg-[#F0F3FF80]">
                <th className="px-8 py-3 w-[25%] font-semibold">
                  USER DETAILS
                </th>
                <th className="px-8 py-3 w-[15%] font-semibold">ROLE</th>
                <th className="px-8 py-3 w-[30%] font-semibold">ALLOCATION</th>
                <th className="px-8 py-3 w-[15%] font-semibold">STATUS</th>
                <th className="px-8 py-3 w-[15%] font-semibold">
                  INTERACTIONS
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {currentUsers.map((user, idx) => (
                <tr
                  key={idx}
                  className="h-25 text-[#001C3B] bg-[#ffffff]  text-[14px]"
                >
                  <td className=" px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.imgg}
                        alt={user.name}
                        className="w-10 h-10"
                      />
                      <div>
                        <div className="font-bold text-[#001C3B] text-[14px]">
                          {user.name}
                        </div>
                        <div className="text-[#4A4455] text-[12px] font-medium">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-xl text-xs font-semibold uppercase ${
                        user.role === "Learner"
                          ? "bg-[#630ED41A] text-[#630ED4]"
                          : user.role === "Instructor"
                            ? "bg-[#455F871A] text-[#455F87]"
                            : user.role === "Admin"
                              ? "bg-[#BA1A1A1A] text-[#BA1A1A]"
                              : ""
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className=" text-[#455F87] w-25 px-6 py-4">
                    {user.allocation}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`flex items-center gap-2 text-sm font-semibold ${
                        user.status === "Active"
                          ? "text-[#001C3B]"
                          : "text-[#001C3B]"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-[#16A34A]" : "bg-current"} `}
                      ></span>
                      {user.status}
                    </span>
                  </td>

                  <td>
                    {/* <button className="text-blue-600 hover:underline">
                    View
                  </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="px-8 py-4 flex justify-between items-center text-xs text-[#6B7280] font-bold">
          <span>
            SHOWING {startIndex + 1}-
            {Math.min(startIndex + ITEMS_PER_PAGE, users.length)} OF{" "}
            {users.length} INTERNS
          </span>

          <div className="flex items-center gap-2">
            {/* Prev */}
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              {"<"}
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;

              // Show only first 3 pages
              if (page <= 3) {
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page ? "bg-blue-600 text-white" : "border"
                    }`}
                  >
                    {page}
                  </button>
                );
              }

              // Show ellipsis after page 3
              if (page === 4) {
                return (
                  <span
                    key="ellipsis"
                    className="px-3 py-1 border rounded text-gray-500"
                  >
                    ...
                  </span>
                );
              }

              return null;
            })}

            {/* Next */}
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
