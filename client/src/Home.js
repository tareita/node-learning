import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      welcome to anemay wip <Link to="posts">go to posts</Link>{" "}
    </div>
  );
};

export default Home;
