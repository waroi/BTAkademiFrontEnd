import { useState, useEffect } from "react";
import Post from "./Post";
export const PostList = () => {
  const [getPosts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await fetch("http://localhost:3000/posts");
    const parsedData = await data.json();
    setPosts(parsedData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Post
        key={getPosts.id}
        title={getPosts.title}
        text={getPosts.text}
        author={getPosts.author}
        date={getPosts.date}
      />
    </>
  );
};
