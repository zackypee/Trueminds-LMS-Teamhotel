import { useState } from "react";
import sessionPreview from "../../../assets/live-session-preview.jpg";
import avatar1 from "../../../assets/avatar-1.jpg";
import { MdVideocam, MdDownload } from "react-icons/md";
import { LiaComments } from "react-icons/lia";
import { TbSend2 } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

function LearnerLiveSession() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Babalola Zainab",
      role: "Learner",
      time: "10:42 AM",
      text: "Should we prioritize accessible colors before defining the grid?",
      isMe: false,
    },
    {
      id: 2,
      sender: "You",
      role: "",
      time: "10:45 AM",
      text: "I think following WCAG 2.1 is crucial from the start!",
      isMe: true,
    },
    {
      id: 3,
      sender: "Tunde Adeyemi",
      role: "Instructor",
      time: "10:46 AM",
      text: "Exactly. Let's cover the contrast ratios in 5 minutes.",
      isMe: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [notes, setNotes] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          role: "",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          text: newMessage,
          isMe: true,
        },
      ]);
      setNewMessage("");
    }
  };

  const handleClearNotes = () => {
    setNotes("");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden flex flex-col p-4 gap-6">
        {/* Video Preview */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={sessionPreview}
            alt="session preview"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
          <div className="absolute top-3 left-3">
            <span className="bg-[#630ED4] text-white text-xs font-bold px-2 py-1 rounded">
              LIVE NOW
            </span>
          </div>
          <p className="absolute bottom-8 left-3 text-white text-base font-bold">
            UX Design Masterclass
          </p>
        </div>

        {/* Instructor Info */}
        <div className="flex items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <MdVideocam className="text-xl text-[#630ED4]" />
            <p className="text-sm text-[#1E3A5F] font-medium">
              Instructor: Tunde Adeyemi
            </p>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineUserGroup className="text-xl text-[#16A34A]" />
            <p className="text-sm text-[#1E3A5F] font-medium">124 Active</p>
          </div>
        </div>

        {/* Join on Zoom Button */}
        <button className="flex items-center justify-center gap-2 bg-[#0029FD] text-white text-sm font-medium py-5 ml-5 rounded-lg hover:bg-blue-800 transition-colors w-80">
          <MdVideocam className="text-xl" /> Join on Zoom
        </button>

        {/* Collaboration Hub */}
        <h3 className="text-xl font-bold text-[#1E3A5F]">Collaboration Hub</h3>

        {/* Session Notes */}
        <div className="border border-[#E5E7EB] rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-[#1E3A5F]">
              My Session Notes
            </h3>
            <button
              onClick={handleClearNotes}
              className="text-sm text-[#0029FD] hover:underline"
            >
              Clear
            </button>
          </div>
          <textarea
            placeholder="Type your personal insights here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-28 bg-[#E7EEFF4D] text-sm text-[#1E3A5F] outline-none resize-none placeholder:text-[#6B7280] p-3 rounded-lg"
          />
        </div>

        {/* Comment Box */}
        <div className="border border-[#E5E7EB] bg-[#0d948915] rounded-2xl p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LiaComments className="text-xl text-[#E8651A]" />
              <h3 className="text-base font-bold text-[#1E3A5F]">
                Comment box
              </h3>
            </div>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          {/* Latest message only on mobile */}
          <div className="flex gap-2 items-start">
            <img
              src={avatar1}
              alt="avatar"
              className="w-7 h-7 rounded-full object-cover shrink-0"
            />
            <p className="text-xs text-[#1E3A5F] bg-[#F9FAFB] rounded-xl px-3 py-2">
              {messages[messages.length - 1].text}
            </p>
          </div>
          {/* Input */}
          <div className="flex items-center gap-2 border border-[#E5E7EB] bg-[#F9FAFB] rounded-xl px-3 py-2">
            <input
              type="text"
              placeholder="Share a thought..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 text-xs outline-none text-[#1E3A5F]"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#0029FD] text-white p-2 rounded-lg"
            >
              <TbSend2 className="text-xl" />
            </button>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div>
          <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">
            Downloadable Resources
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-4 py-3">
              <div>
                <p className="text-sm font-medium text-[#1E3A5F]">
                  Design_System_Guide.pdf
                </p>
                <p className="text-xs text-[#6B7280]">10.2 MB • PDF Document</p>
              </div>
              <button className="border border-[#E5E7EB] rounded-lg p-2">
                <FiDownload className="text-lg text-[#0029FD]" />
              </button>
            </div>
            <div className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-4 py-3">
              <div>
                <p className="text-sm font-medium text-[#1E3A5F]">
                  Design_Assets_V2.zip
                </p>
                <p className="text-xs text-[#6B7280]">84.5 MB • Archive</p>
              </div>
              <button className="border border-[#E5E7EB] rounded-lg p-2">
                <FiDownload className="text-lg text-[#0029FD]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:flex gap-15 p-18 bg-white min-h-screen">
        {/* Left Column */}
        <div className="w-[65%]">
          <p className="text-[#0029FD] text-lg font-semibold mb-8">
            Ongoing Class
          </p>
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-7xl font-bold text-[#1E3A5F] mb-8">
                Join Live Session
              </h1>
              <p className="text-[#6B7280] text-xl max-w-3xl mb-10">
                Advanced UI Engineering: Mastering Material Design 3 and Tonal
                Layering with Senior Architect Sarah Jenkins.
              </p>
            </div>
          </div>

          {/* Video Preview */}
          <div className="relative rounded-2xl overflow-hidden mb-10">
            <img
              src={sessionPreview}
              alt="session preview"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-3">
              <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                LIVE
              </span>
              <span className="text-white text-base">
                1,248 learners watching
              </span>
            </div>
            <p className="absolute bottom-10 left-4 text-white text-3xl mb-5 font-medium">
              Session Preview: Module 4.2
            </p>
          </div>

          {/* Downloadable Resources */}
          <div>
            <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Downloadable Resources
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-6 py-5">
                <div>
                  <p className="text-base font-medium text-[#1E3A5F]">
                    Design_System_Guide.pdf
                  </p>
                  <p className="text-base text-[#6B7280]">
                    10.2 MB • PDF Document
                  </p>
                </div>
                <button className="border border-[#E5E7EB] rounded-lg p-3 hover:bg-[#F9FAFB] transition-colors">
                  <FiDownload className="text-2xl text-[#1E3A5F]" />
                </button>
              </div>
              <div className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-4 py-3">
                <div>
                  <p className="text-base font-medium text-[#1E3A5F]">
                    Design_Assets_V2.zip
                  </p>
                  <p className="text-base text-[#6B7280]">84.5 MB • Archive</p>
                </div>
                <button className="border border-[#E5E7EB] rounded-lg p-3 hover:bg-[#F9FAFB] transition-colors">
                  <FiDownload className="text-2xl text-[#1E3A5F]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[30%] flex flex-col gap-13 mt-42">
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-[#0029FD] text-white text-xl font-medium px-8 py-5 rounded-lg hover:bg-blue-800 transition-colors">
              <MdVideocam className="text-3xl" /> Join on Zoom
            </button>
          </div>
          {/* Comment Box */}
          <div className="border border-[#E5E7EB] bg-[#0d948915] rounded-2xl p-4 flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LiaComments className="text-3xl text-[#E8651A]" />
                <h3 className="text-4xl font-bold text-[#1E3A5F]">
                  Comment box
                </h3>
              </div>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-4 max-h-200 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id}>
                  {!message.isMe ? (
                    <div className="flex gap-2 items-start">
                      <img
                        src={avatar1}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-semibold text-[#1E3A5F]">
                            {message.sender}
                            <span className="text-[#6B7280] font-normal">
                              {" "}
                              ({message.role})
                            </span>
                          </p>
                          <p className="text-sm text-[#6B7280]">
                            {message.time}
                          </p>
                        </div>
                        <p
                          className={`text-xl text-[#1E3A5F] bg-[#F9FAFB] rounded-xl px-3 py-2 max-w-[45%] ${message.role === "Instructor" ? "border-l-4 border-[#7C3AED]" : ""}`}
                        >
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end items-center gap-2">
                      <p className="text-xl text-white bg-[#1E3A5F] rounded-xl px-3 py-2 max-w-[40%]">
                        {message.text}
                      </p>
                      <div className="w-8 h-8 rounded-full bg-purple-400 shrink-0"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-2 border-[#E5E7EB] bg-[#F9FAFB] rounded-xl px-7 py-5">
              <input
                type="text"
                placeholder="Share a thought..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 text-xl outline-none text-[#1E3A5F]"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#0029FD] text-white text-xl px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <TbSend2 className="text-2xl text-[#ffffff]" />
              </button>
            </div>
          </div>
          ;{/* Session Notes */}
          <div className="border border-[#E5E7EB] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-[#1E3A5F]">
                My Session Notes
              </h3>
              <button
                onClick={handleClearNotes}
                className="text-xl text-[#0029FD] hover:underline"
              >
                Clear
              </button>
            </div>
            <textarea
              placeholder="Type your personal insights here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-32 bg-[#E7EEFF4D] text-xl text-[#1E3A5F] outline-none resize-none placeholder:text-[#6B7280] p-5 rounded-lg"
            />
          </div>
          ;
        </div>
      </div>
    </div>
  );
}

export default LearnerLiveSession;