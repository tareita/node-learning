import React from "react";

const Register = () => {
  return (
    <div>
      <h2 className="my-3">Register</h2>
      <form>
        <div class="my-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class=" mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
