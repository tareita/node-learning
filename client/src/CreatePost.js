import React from "react";

const CreatePost = () => {
  return (
    <div>
      <h3 className="my-4">Create a post:</h3>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Author
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input className="form-control" id="exampleInputPassword1" />
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
