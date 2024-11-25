import React from "react";
import "./WorkModel.css";

export interface IExperienceModel {
  workExperience: string;
  workPlace: string;
  company: string;
  discription: string;
}

const ExperienceModel = ({
  workExperience,
  workPlace,
  company,
  discription,
}: IExperienceModel) => {
  return (
    <div className="education">
      <i className="fa-solid fa-laptop"></i>
      <span>{workExperience}</span>
      <h4 className="science">{workPlace}</h4>
      <h3 className="colorDate">01/1997-07/1997</h3>
      <p className="para">{discription}</p>
    </div>
  );
};

export default ExperienceModel;
