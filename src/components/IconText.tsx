import React from "react";
import "./IconText.css";

export interface IIconText {
  icon: string;
  value: string;
  type: string;
}

const IconText = ({ icon, value, type }: IIconText) => {
  return (
    <div>
      <div>
        {type !== "skills" && type !== "Interest" && type !== "Language" && (
          <div className="text valueStyle">
            <i className={`fa-solid ${icon}`}></i>
            <span className="gap">{value}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconText;
