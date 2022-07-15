import React from "react";

const Post = (props) => {
  const { title, author } = props.post;
  return (
    <div>
      <h3>{title}</h3>
      <h6>{author}</h6>
    </div>
  );
};

export default Post;
