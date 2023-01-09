import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { PostList } from "../context/PostList";
const HomeView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PostList />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeView;
