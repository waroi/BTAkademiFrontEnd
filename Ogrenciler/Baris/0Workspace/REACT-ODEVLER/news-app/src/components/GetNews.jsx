import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  CardFooter,
  CardHeader,
  CardSmallText,
  CardBadge,
  CardLink,
} from "./Card";

const GetNews = () => {
  return (
    <Card>
      <CardImage src="https://static01.nyt.com/images/2023/01/02/multimedia/02nfl-bills-ambulance-1-a4d3/02nfl-bills-ambulance-1-a4d3-mediumThreeByTwo440.jpg" />
      <CardHeader>
        <CardTitle>
          Damar Hamlin of Buffalo Bills in Critical Condition After Collapsing
          During N.F.L. Game <CardBadge color="primary">Sport</CardBadge>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CardSmallText>
          <i className="fa-regular fa-calendar-days"></i> 2023-01-02
        </CardSmallText>
        <CardText>
          Hamlin, a 24-year-old safety, went into cardiac arrest after being
          hit, but his heartbeat was restored by medical personnel, the Bills
          said. The game against the Cincinnati Bengals was postponed....
          <CardLink
            href="https://www.nytimes.com/2023/01/02/sports/football/damar-hamlin-bills-hit.html"
            target="_blank"
          >
            Devamını Oku <i class="fa-solid fa-angles-right"></i>
          </CardLink>
        </CardText>
      </CardBody>
      <CardFooter>
        <CardSmallText>
          <i className="fa-solid fa-user-pen"></i> Emmanuel Morgan and Ken
          Belson
        </CardSmallText>
      </CardFooter>
    </Card>
  );
};

export default GetNews;
