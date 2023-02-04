import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import LoadingView from "./LoadingView";
import Loadable from "react-loadable";
import { useTheme } from "../context/ThemeContext";

// const LazyComponent = React.lazy(() => import("../components/GetActors"));
const LoadableGetActors = Loadable({
  loader: () => import("../components/GetActors"),
  loading: () => <LoadingView />,
});
const HomeView = () => {
  const { theme } = useTheme();
  return (
    <Container fluid className={`bg-${theme}`}>
      <Row className="g-3 pt-5">
        <LoadableGetActors />
      </Row>
    </Container>
  );
};

export default HomeView;
