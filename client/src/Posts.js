import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:4000/posts");
    const data = await res.json();
    setPosts(data.posts);
  };
  return (
    <div>
      <h1 className="my-3"> Posts </h1>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
