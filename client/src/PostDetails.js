import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import Comment from "./Comment";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { title, content, author } = post;
  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = async () => {
    const res = await fetch("http://localhost:4000/posts/" + id);
    const data = await res.json();
    setPost(data.post);
    setComments(data.comments);
  };
  return (
    <div>
      <div className="my-3">
        <Link to="/posts">Back to posts</Link>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">{content}</p>
        </div>
      </div>
      <div>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default PostDetails;
