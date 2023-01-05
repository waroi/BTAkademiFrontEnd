import { useState, useEffect } from "react";
import Post from "./Post";
const PostList = () => {
  const [getPosts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {getPosts.map((element) => {
        return (
          <Post
            key={element.id}
            title={element.title}
            text={element.text}
            author={element.author}
            date={element.date}
          />
        );
      })}
      ;
    </>
  );
};

export default PostList;
