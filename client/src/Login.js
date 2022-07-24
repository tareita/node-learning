import React from "react";

const Login = () => {
  return (
    <div>
      <h2 className="my-3">Login</h2>
      <form>
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

export default Login;
