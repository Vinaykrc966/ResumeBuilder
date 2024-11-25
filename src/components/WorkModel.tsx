/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./WorkModel.css";

export interface IWorkModel {
  education: string;
  level: string;
  company: string;
  startDate: string;
}

const WorkModel = ({ education, level, company, startDate }: IWorkModel) => {
  return (
    <div className="education educationStyle">
      <style></style>
      <i className="fa-solid fa-school"></i>
      <span> {education}</span>
      <h4 className="science">{level}</h4>
      <h3>{company}</h3>
      <h3 className="colorDate">{startDate}</h3>
    </div>
  );
};

export default WorkModel;
