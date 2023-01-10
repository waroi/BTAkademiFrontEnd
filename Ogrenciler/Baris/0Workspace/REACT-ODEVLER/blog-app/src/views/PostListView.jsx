import { useState, useEffect } from "react";
import PostView from "./PostView";
export const PostListView = () => {
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
      {getPosts.map((item) => {
        return (
          <PostView
            key={item.id}
            title={item.title}
            img={item.img}
            text={item.text}
            author={item.author}
            date={item.date}
          />
        );
      })}
    </>
  );
};
