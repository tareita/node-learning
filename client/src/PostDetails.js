import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  console.log(post);
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">{content}</p>
        </div>
      </div>
      <div>
        {comments.map((comment) => {
          return (
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-subtitle mb-2 text-muted">
                  {comment.author}
                </h5>
                <p className="card-text">{comment.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostDetails;
