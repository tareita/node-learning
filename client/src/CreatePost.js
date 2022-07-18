import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/posts/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    const id = data.post._id;
    navigate("/posts/" + id);
  };
  return (
    <div>
      <h3 className="my-4">Create a post:</h3>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Author
          </label>
          <input
            value={formData.author}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleFormDataChange}
            name="author"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="exampleInputPassword1"
            value={formData.title}
            onChange={handleFormDataChange}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Content
          </label>
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
