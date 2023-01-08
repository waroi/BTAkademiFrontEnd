import axios from "axios";
import React, { useState, useRef } from "react";

function SendPost({ postUpdate }) {
  const titleRef = useRef();
  const authorRef = useRef();
  const testRef = useRef();

  const [post, setPost] = useState({
    title: "",
    author: "",
    test: "",
  });

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

        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginTop: "0" }}>Yeni Makale Ekle</h2>
        <p>
          <label>
            Başlık:
            <br />
            <input name="title" type="text" ref={titleRef} className="input" />
          </label>
        </p>
        <p>
          <label>
            Yazar:
            <br />
            <input
              name="author"
              type="text"
              ref={authorRef}
              className="input"
            />
          </label>
        </p>
        <p>
          <label>
            Deneme Yazısı:
            <br />
            <textarea
              name="denemeText"
              type="text"
              ref={testRef}
              className="input"
            />
          </label>
        </p>
        <p>
          <input type="submit" value="Gönder" />
        </p>
      </form>
    </div>
  );
}

export default SendPost;
