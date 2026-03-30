import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const platformLinks = [
        {id:"1", text: "About Us" , link :"#"   },
        {id:"2", text: "Careers" , link :"#"   },
        {id:"3", text: "Contacts" , link :"#"   },
        {id:"4", text: "Blogs" , link :"#"   }
    ]
    const legalLinks = [
        {id:"1", text: "Privacy Policy", link: "#"},
        {id:"2", text: "Terms of Service", link: "#"},
        {id:"3", text: "Cookie Settings", link: "#"},
        {id:"4", text: "Accessibility", link: "#"}
    ]

  return (
    <div className="flex flex-col px-21">
      <div className="flex justify-between">
        <div>
          <h2>TalentFlow</h2>
          <p className="text-left">
            Empowering learners through real-world product development and
            collaborative growth. Join our global community of forward-thinkers.
          </p>
        </div>
        <div className="flex ">
            <div className="flex flex-col">
                <p>Platform</p>
                {platformLinks.map((item)=>(
                    <Link to={item.link} key={item.text}>{item.text}</Link>
                ))}
            </div>
            <div className="flex flex-col">
                <p>Legal</p>
                {legalLinks.map((item)=> (
                    <Link to={item.link} key={item.text}>{item.text}</Link>
                ))}
            </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p>© 2024 TalentFlow LMS. All rights reserved.</p>
        <button>English</button>
      </div>
    </div>
  );
};

export default Footer;
