import { useState } from "react";
import "./App.css";

import PostList from "./components/PostList";
import SendPost from "./components/SendPost";

function App() {
  const [isPostUpdate, setIsPostUpdate] = useState(false);

  return (
    <div className="App">
      <SendPost postUpdate={() => setIsPostUpdate()} />
      <PostList isPostUpdate={isPostUpdate} />
    </div>
  );
}

export default App;
