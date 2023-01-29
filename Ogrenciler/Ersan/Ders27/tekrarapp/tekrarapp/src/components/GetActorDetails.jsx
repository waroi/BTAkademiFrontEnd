import Card from "react-bootstrap/Card";

const GetActorDetails = ({ props }) => {
  return (
    <Card>
      <Card.Header>{props.relatedNames[0].name}</Card.Header>
      <Card.Body>
        <Card.Text>{props.caption}</Card.Text>
        <Card.Text>
          <small>{props.copyright}</small>{" "}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{props.createdOn}</Card.Footer>
    </Card>
  );
};

export default GetActorDetails;
