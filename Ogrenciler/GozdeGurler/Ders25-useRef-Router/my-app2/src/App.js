import { useState } from "react";
import "./App.css";
import { BsPen } from "react-icons/bs";
import PostList from "./components/PostList";
import SendPost from "./components/SendPost";

function App() {
  const [isPostUpdate, setIsPostUpdate] = useState(false);

  return (
    <>
      <div className="header">
        <a
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          {" "}
          <h1>
            Babil'in Kütüphanesi{"  "}
            <BsPen style={{ fontSize: "20px" }} />
          </h1>
        </a>
      </div>
      <div className="App">
        <SendPost postUpdate={() => setIsPostUpdate()} />
        <PostList isPostUpdate={isPostUpdate} />
      </div>
    </>
  );
}

export default App;
