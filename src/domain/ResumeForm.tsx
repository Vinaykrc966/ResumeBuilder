import React, { useState } from "react";
import "./ResumeForm.css";

const ResumeForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    document
      .getElementById("myForm")
      ?.addEventListener("submit", function (event: any) {
        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData.entries());
        console.log(values);
      });
  };
  return (
    <form id="myForm" className="headStyle" onSubmit={handleSubmit}>
      <h1>User Resume Form</h1>
      <div className="formStyle">
        <label>Email:</label>
        <input
          className="textStyle"
          type="email"
          id="email"
          name="email"
          // value={formData.email}
          required
        />
      </div>
      <div className="formStyle">
        <label>Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          // value={formData.phone}
          required
        />
      </div>
      <div className="formStyle">
        <label>Address:</label>
        <textarea
          className="textStyle"
          id="address"
          name="address"
          // value={formData.address}
          required
        ></textarea>
      </div>
      <div className="formStyle">
        <label>Skills:</label>
        <input
          className="textStyle"
          type="text"
          id="interest"
          // value={formData.interest}
          name="interest"
        />
      </div>
      <div className="formStyle">
        <label>Language:</label>
        <input
          className="textStyle"
          type="text"
          id="language"
          // value={formData.language}
          name="language"
        />
      </div>

      <button type="submit" className="formStyle textStyle">
        Submit
      </button>
    </form>
  );
};
export default ResumeForm;
