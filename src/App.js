import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({});

  return (
    <div className="App-header">
      <form style={{ width: "300px" }} className="App-header">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Message</label>
        <textarea type="text" name="message" rows="8" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
