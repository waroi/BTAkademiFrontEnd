import React from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../components/Posts.jsx";

const PostView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Gönderiler</h1>
      <button onClick={() => navigate("/")}>Anasayfa'ya Git</button>
      <button onClick={() => navigate("/about")}>Hakkında Sayfasına Git</button>
      <Posts />
    </div>
  );
};

export default PostView;
