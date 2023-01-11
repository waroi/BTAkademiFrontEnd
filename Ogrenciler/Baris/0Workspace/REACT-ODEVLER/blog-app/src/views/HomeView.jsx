import Container from "../components/Container";
import Row from "../components/Row";
import GetPostList from "../utils/GetPostList";
import DesignerInfo from "./DesignerInfoView";
import NewPostButton from "../components/NewPostButton";
const HomeView = () => {
  return (
    <Container>
      <h2>Blog Anasayfa</h2>
      <Row>
        <div>
          <DesignerInfo />
        </div>
        <div style={{ width: "100%" }}>
          <GetPostList />
        </div>
      </Row>
      <NewPostButton to="/newPost" color="primary">
        <i className="fa-solid fa-plus"></i>
      </NewPostButton>
    </Container>
  );
};

export default HomeView;
