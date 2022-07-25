import React from "react";

const Login = () => {
  const [formData, setFormData] = useState({});
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitClick = async (e) => {
    const res = await fetch("https://localhost:4000/login/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
  };
  return (
    <div>
      <h2 className="my-3">Login</h2>
      <form>
        <div class=" mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={formData.username}
            name="username"
            onChange={handleFormDataChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={formData.password}
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

export default Login;
