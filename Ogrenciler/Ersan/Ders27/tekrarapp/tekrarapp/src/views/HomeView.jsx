import React, { Suspense } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import LoadingView from "./LoadingView";
import Loadable from "react-loadable";

// const LazyComponent = React.lazy(() => import("../components/GetActors"));
const LoadableGetActors = Loadable({
  loader: () => import("../components/GetActors"),
  loading: () => <LoadingView />,
});
const HomeView = () => {
  return (
    <Container fluid>
      <Row className="g-3 mt-5">
        <LoadableGetActors />
      </Row>
    </Container>
  );
};

export default HomeView;
