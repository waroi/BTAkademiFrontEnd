import axios from "axios";
import React, { useState, useRef } from "react";

function SendPost({ postUpdate }) {
  const titleRef = useRef();
  const authorRef = useRef();
  const testRef = useRef();

  const [, setPost] = useState({});

  const handleSubmit = (e) => {
    const newPost = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      id: Date.now(),
      test: testRef.current.value,
    };

    e.preventDefault();
    axios
      .post("http://localhost:3000/posts", newPost)
      .then((res) => {
        setPost(res.data);
        postUpdate(!postUpdate);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Title:
            <input name="title" type="text" ref={titleRef} />
          </label>
        </p>
        <p>
          <label>
            Author:
            <input name="author" type="text" ref={authorRef} />
          </label>
        </p>
        <p>
          <label>
            Deneme Yazısı:
            <input name="denemeText" type="text" ref={testRef} />
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  );
}

export default SendPost;
