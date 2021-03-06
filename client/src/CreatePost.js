import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

const CreatePost = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/posts/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json", token: user.token },
    });
    const data = await res.json();
    const id = data.post._id;
    navigate("/posts/" + id);
  };
  return (
    <div>
      <Navbar />
      <h3 className="my-4">Create a post:</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            value={formData.title}
            onChange={handleFormDataChange}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            rows={8}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.content}
            onChange={handleFormDataChange}
            name="content"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
