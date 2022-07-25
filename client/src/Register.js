import React from "react";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({});
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitClick = async (e) => {
    const res = await fetch("https://localhost:4000/register/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
  };
  return (
    <div>
      <h2 className="my-3">Register</h2>
      <form>
        <div class="my-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={formData.email}
            type="email"
            className="form-control"
            name="email"
            onChange={handleFormDataChange}
          />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class=" mb-3">
          <label className="form-label">Username</label>
          <input
            value={formData.username}
            type="text"
            className="form-control"
            name="username"
            onChange={handleFormDataChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            value={formData.password}
            type="password"
            className="form-control"
            name="password"
            onChange={handleFormDataChange}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
