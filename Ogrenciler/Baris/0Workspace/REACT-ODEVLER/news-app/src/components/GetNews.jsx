import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  CardFooter,
} from "./Card";

const GetNews = () => {
  return (
    <Card>
      <CardBody>
        <CardImage src="https://static01.nyt.com/images/2023/01/02/multimedia/02nfl-bills-ambulance-1-a4d3/02nfl-bills-ambulance-1-a4d3-mediumThreeByTwo440.jpg" />
        <CardTitle>
          Damar Hamlin of Buffalo Bills in Critical Condition After Collapsing
          During N.F.L. Game
        </CardTitle>

        <small>Yayınlanma Tarihi: 2023-01-02</small>
        <CardText>
          Hamlin, a 24-year-old safety, went into cardiac arrest after being
          hit, but his heartbeat was restored by medical personnel, the Bills
          said. The game against the Cincinnati Bengals was postponed....
          <a
            href="https://www.nytimes.com/2023/01/02/sports/football/damar-hamlin-bills-hit.html"
            target="_blank"
          >
            Devamını Oku
          </a>
        </CardText>
      </CardBody>
      <CardFooter>
        <strong> Emmanuel Morgan and Ken Belson</strong>
      </CardFooter>
    </Card>
  );
};

export default GetNews;
