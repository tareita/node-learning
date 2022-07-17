import React, { useState } from "react";

const CreatePost = () => {
  const [formData, setFormData] = useState({});
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const handleSubmitClick = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    await fetch("http://localhost:4000/posts/", {
      method: "POST",
      body: JSON.stringify(formData),
      "Content-Type": "application/json",
      Accept: "application/json",
    });
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
