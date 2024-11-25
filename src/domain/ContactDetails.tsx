import React, { useEffect } from "react";
import IconText, { IIconText } from "../components/IconText";
import { CONTACTS, INTEREST, SKILLS } from "../constants/data";
import ResumeForm from "./ResumeForm";

const ContactDetails = () => {
  const bindElements = () => {};
  useEffect(() => {
    bindElements();
  }, []);
  return (
    <>
      <div className="text valueStyle">
        <i className={`fa-solid`}></i>
        <h1 className="inline">Contact Details</h1>
        {CONTACTS.map((contact: IIconText, index: number) => (
          <IconText
            key={index.toString()}
            icon={contact.icon}
            type={contact.type}
            value={contact.value}
          />
        ))}
      </div>

      <div className="text valueStyle">
        <i className={`fa-solid fa-lightbulb`}></i>
        <h1 className="inline">SKILLS</h1>
        {SKILLS.map((skill: string, index: number) => (
          <span key={index.toString()} className="gap colorStyle">
            {skill}
          </span>
        ))}
      </div>

      <div className="text valueStyle">
        <i className={`fa-solid fa-lightbulb`}></i>
        <h1 className="inline">Interests</h1>
        {INTEREST.map((interest: string, index: number) => (
          <span key={index.toString()} className="gap colorStyle">
            {interest}
          </span>
        ))}
      </div>
    </>
  );
};

export default ContactDetails;
