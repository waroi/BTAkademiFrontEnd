import Post from "./Post";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostList({ isPostUpdate }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [isPostUpdate]);

  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            test={post.test}
          />
        );
      })}
    </>
  );
}
