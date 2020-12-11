import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formValues, setFormValues] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormValues(formData);
  };
  const handleReset = () => {
    setFormData({ email: "", name: "", subject: "", message: "" });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const { email, name, subject, message } = formData;

    axios.post("/sendtome", {
      //make an object to be handled from req.body on the backend.
      email,
      name,
      subject,
      //change the name to represent text on the backend.
      text: message,
    });

    console.log(formData);
    handleReset();
  };

  return (
    <div className="App-header">
      <form
        onSubmit={onFormSubmit}
        style={{ width: "300px" }}
        className="App-header"
      >
        <label htmlFor="email">Email</label>
        <input
          value={formData.email}
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Subject</label>
        <input
          value={formData.subject}
          onChange={handleChange}
          type="text"
          name="subject"
          id="subject"
        />
        <label htmlFor="message">Message</label>
        <textarea
          value={formData.message}
          onChange={handleChange}
          type="text"
          name="message"
          rows="8"
        />
        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default App;
