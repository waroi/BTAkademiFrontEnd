import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import SendPost from "./components/SendPost";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <SendPost />
        <PostList />
      </Container>
    </div>
  );
}

export default App;
