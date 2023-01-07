import React from "react";

function Post({ id, title, author, test }) {
  return (
    <div className="post-card">
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{test}</p>
      </div>
    </div>
  );
}

export default Post;
