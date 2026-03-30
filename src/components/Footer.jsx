import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const platformLinks = [
    { id: "1", text: "About Us", link: "#" },
    { id: "2", text: "Careers", link: "#" },
    { id: "3", text: "Contacts", link: "#" },
    { id: "4", text: "Blogs", link: "#" },
  ];
  const legalLinks = [
    { id: "1", text: "Privacy Policy", link: "#" },
    { id: "2", text: "Terms of Service", link: "#" },
    { id: "3", text: "Cookie Settings", link: "#" },
    { id: "4", text: "Accessibility", link: "#" },
  ];

  //   Hooks for Mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer>
      {isMobile ? (
        // Mobile view
        <div className="bg-[#E2E8F080] flex flex-col justify-center items-center py-14 gap-4">
          <ul className="flex gap-10 text-[#94A3B8] text-xs">
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Team</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
          </ul>
          <small className="text-[#94A3B8] text-xs">
            © 2024 TalentFlow LMS{" "}
          </small>
        </div>
      ) : (
        // Desktop View
        <div className=" flex flex-col gap-24 px-20">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-5">
              <h2 className="font-bold text-black">
                Talent<span className="text-[#7C3AED]">Flow</span>
              </h2>
              <p className="text-left max-w-sm text-[#64748B] text-sm font-normal">
                Empowering learners through real-world product development and
                collaborative growth. Join our global community of
                forward-thinkers.
              </p>
            </div>
            <div className="flex gap-20 mr-20">
              <nav aria-label="Platform links">
                <h3 className="font-semibold text-black">Platform</h3>
                <ul className="flex flex-col gap-4 mt-4">
                  {platformLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className="text-[#475569] text-sm font-normal"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav aria-label="Legal links">
                <h3 className="font-semibold text-black">Legal</h3>
                <ul className="flex flex-col gap-4 mt-4">
                  {legalLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className="text-[#475569] text-sm font-normal"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex flex-col">
            <hr className=" border-[#F1F5F9]" />
            <div className="flex justify-between py-6">
              <small className="text-[#94A3B8] text-xs">
                © 2024 TalentFlow LMS. All rights reserved.
              </small>
              <button className="flex items-center gap-2 text-xs border border-[#E2E8F0] px-4 py-2 rounded-lg">
                <img src="/icons/Vector.png" className="size-4" /> English
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
