import React, { useState } from "react";
import "./style.css"; // Import the custom CSS file

const Form = () => {
  // const [username, setUsername] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="form-container">
      <form className="form-wrapper">
        {" "}
        {/* Add a wrapper to center the form */}
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Address"
            id="address"
            name="address"
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Enter Town" id="town" name="town" />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter State"
            id="state"
            name="state"
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Enter Zip" id="zip" name="zip" />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Country"
            id="country"
            name="country"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
