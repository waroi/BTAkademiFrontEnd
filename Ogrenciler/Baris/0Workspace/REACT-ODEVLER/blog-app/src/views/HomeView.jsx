import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { PostListView } from "./PostListView";
import DesignerInfo from "./DesignerInfoView";
import NewPostButton from "../components/NewPostButton";
const HomeView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <DesignerInfo />
        </Col>
        <Col>
          <PostListView />
        </Col>
      </Row>
      <NewPostButton to="/newPost" color="primary">
        <i class="fa-solid fa-plus"></i>
      </NewPostButton>
    </Container>
  );
};

export default HomeView;
