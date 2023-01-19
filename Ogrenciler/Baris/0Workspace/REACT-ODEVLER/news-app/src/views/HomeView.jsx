import Container from "../components/Container";
import GetNewsList from "../components/GetNewsList";

const HomeView = () => {
  const fetchData = async () => {
    await fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key="
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  fetchData();
  return (
    <Container>
      <GetNewsList />
    </Container>
  );
};

export default HomeView;

//API_KEY === BZEqtBt8KuCOPNYUDzdwErL32riYCBsb

// {
//     "status": "OK",
//     "copyright": "Copyright (c) 2023 The New York Times Company.  All Rights Reserved.",
//     "num_results": 20,
//     "results": [
//         {
//             "uri": "nyt://article/f5b31647-781b-5398-8c43-20133cadd074",
//             "url": "https://www.nytimes.com/2023/01/02/sports/football/damar-hamlin-bills-hit.html",
//             "id": 100000008695106,
//             "asset_id": 100000008695106,
//             "source": "New York Times",
//             "published_date": "2023-01-02",
//             "updated": "2023-01-03 14:44:57",
//             "section": "Sports",
//             "subsection": "N.F.L.",
//             "nytdsection": "sports",
//             "adx_keywords": "Football;Sports Injuries;Hamlin, Damar (1998- );Buffalo Bills;Cincinnati Bengals;National Football League",
//             "column": null,
//             "byline": "By Emmanuel Morgan and Ken Belson",
//             "type": "Article",
//             "title": "Damar Hamlin of Buffalo Bills in Critical Condition After Collapsing During N.F.L. Game",
//             "abstract": "Hamlin, a 24-year-old safety, went into cardiac arrest after being hit, but his heartbeat was restored by medical personnel, the Bills said. The game against the Cincinnati Bengals was postponed.",
//             "des_facet": [
//                 "Football",
//                 "Sports Injuries"
//             ],
//             "org_facet": [
//                 "Buffalo Bills",
//                 "Cincinnati Bengals",
//                 "National Football League"
//             ],
//             "per_facet": [
//                 "Hamlin, Damar (1998- )"
//             ],
//             "geo_facet": [],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "An ambulance carrying Damar Hamlin left the field at Paycor Stadium during the game between the Bills and Bengals on Monday night.",
//                     "copyright": "Dylan Buell/Getty Images",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/02/multimedia/02nfl-bills-ambulance-1-a4d3/02nfl-bills-ambulance-1-a4d3-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/02/multimedia/02nfl-bills-ambulance-1-a4d3/02nfl-bills-ambulance-1-a4d3-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/02/multimedia/02nfl-bills-ambulance-1-a4d3/02nfl-bills-ambulance-1-a4d3-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/45e83d89-be71-594e-9960-8f9c5d2f6db5",
//             "url": "https://www.nytimes.com/2023/01/12/arts/music/lisa-marie-presley-dead.html",
//             "id": 100000008725794,
//             "asset_id": 100000008725794,
//             "source": "New York Times",
//             "published_date": "2023-01-12",
//             "updated": "2023-01-14 16:40:27",
//             "section": "Arts",
//             "subsection": "Music",
//             "nytdsection": "arts",
//             "adx_keywords": "Deaths (Obituaries);Pop and Rock Music;Presley, Lisa Marie;Presley, Elvis;Presley, Priscilla;Jackson, Michael",
//             "column": null,
//             "byline": "By Eduardo Medina, April Rubin and Neil Genzlinger",
//             "type": "Article",
//             "title": "Lisa Marie Presley, Singer-Songwriter and Daughter of Elvis, Dies at 54",
//             "abstract": "Her death in Los Angeles on Thursday, after a life tinged with tragedy, came after a medical emergency and brief hospitalization.",
//             "des_facet": [
//                 "Deaths (Obituaries)",
//                 "Pop and Rock Music"
//             ],
//             "org_facet": [],
//             "per_facet": [
//                 "Presley, Lisa Marie",
//                 "Presley, Elvis",
//                 "Presley, Priscilla",
//                 "Jackson, Michael"
//             ],
//             "geo_facet": [],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Lisa Marie Presley in performance in Chicago in 2012. On her albums, she set out to establish a sound of her own while also paying homage to her father. ",
//                     "copyright": "Barry Brecheisen/Invision, via Associated Press",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/14/multimedia/12xp-lisapresley-kljt-print1-SUB2/12xp-lisapresley-kljt-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/14/multimedia/12xp-lisapresley-kljt-print1-SUB2/12xp-lisapresley-kljt-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/14/multimedia/12xp-lisapresley-kljt-print1-SUB2/12xp-lisapresley-kljt-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/c7f6c06e-4c6a-5b4a-a598-69789bdf61c8",
//             "url": "https://www.nytimes.com/2022/12/19/nyregion/george-santos-ny-republicans.html",
//             "id": 100000008633295,
//             "asset_id": 100000008633295,
//             "source": "New York Times",
//             "published_date": "2022-12-19",
//             "updated": "2022-12-19 12:28:29",
//             "section": "New York",
//             "subsection": "",
//             "nytdsection": "new york",
//             "adx_keywords": "Midterm Elections (2022);United States Politics and Government;Elections, House of Representatives;Campaign Finance;Content Type: Personal Profile;Ethics and Official Misconduct;internal-sub-only;Santos, George (1988- );House of Representatives;Baruch College;Citigroup Inc;Goldman Sachs Group Inc;Devolder Organization;Friends of Pets United;New York State;Long Island (NY)",
//             "column": null,
//             "byline": "By Grace Ashford and Michael Gold",
//             "type": "Article",
//             "title": "Who Is Rep.-Elect George Santos? His Résumé May Be Largely Fiction.",
//             "abstract": "Mr. Santos, a Republican from New York, says he’s the “embodiment of the American dream.” But he seems to have misrepresented a number of his career highlights.",
//             "des_facet": [
//                 "Midterm Elections (2022)",
//                 "United States Politics and Government",
//                 "Elections, House of Representatives",
//                 "Campaign Finance",
//                 "Content Type: Personal Profile",
//                 "Ethics and Official Misconduct",
//                 "internal-sub-only"
//             ],
//             "org_facet": [
//                 "House of Representatives",
//                 "Baruch College",
//                 "Citigroup Inc",
//                 "Goldman Sachs Group Inc",
//                 "Devolder Organization",
//                 "Friends of Pets United"
//             ],
//             "per_facet": [
//                 "Santos, George (1988- )"
//             ],
//             "geo_facet": [
//                 "New York State",
//                 "Long Island (NY)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "George Santos, at the Republican Jewish Coalition in November, said he worked at Citigroup and Goldman Sachs, but neither firm had records of his employment.",
//                     "copyright": "Mikayla Whitmore for The New York Times",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/15/nyregion/00ny-santos/00ny-santos-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/15/nyregion/00ny-santos/00ny-santos-mediumThreeByTwo210-v3.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/15/nyregion/00ny-santos/00ny-santos-mediumThreeByTwo440-v3.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/c09182f8-da7c-500f-a2e9-b3bbf8805997",
//             "url": "https://www.nytimes.com/2023/01/09/dining/noma-closing-rene-redzepi.html",
//             "id": 100000008711683,
//             "asset_id": 100000008711683,
//             "source": "New York Times",
//             "published_date": "2023-01-09",
//             "updated": "2023-01-12 06:02:21",
//             "section": "Food",
//             "subsection": "",
//             "nytdsection": "food",
//             "adx_keywords": "Restaurants;Shutdowns (Institutional);Chefs;Workplace Hazards and Violations;Internships;internal-sub-only;audio-positive-escape;Redzepi, Rene;Noma (Copenhagen, Restaurant);Copenhagen (Denmark)",
//             "column": null,
//             "byline": "By Julia Moskin",
//             "type": "Article",
//             "title": "Noma, Rated the World’s Best Restaurant, Is Closing Its Doors",
//             "abstract": "The Copenhagen chef René Redzepi says fine dining at the highest level, with its grueling hours and intense workplace culture, has hit a breaking point: “It’s unsustainable.”",
//             "des_facet": [
//                 "Restaurants",
//                 "Shutdowns (Institutional)",
//                 "Chefs",
//                 "Workplace Hazards and Violations",
//                 "Internships",
//                 "internal-sub-only",
//                 "audio-positive-escape"
//             ],
//             "org_facet": [
//                 "Noma (Copenhagen, Restaurant)"
//             ],
//             "per_facet": [
//                 "Redzepi, Rene"
//             ],
//             "geo_facet": [
//                 "Copenhagen (Denmark)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "",
//                     "copyright": "Erik Refner for The New York Times",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/11/multimedia/11noma11-1-efaa/09noma11-1-efaa-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/11/multimedia/11noma11-1-efaa/09noma11-1-efaa-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/11/multimedia/11noma11-1-efaa/09noma11-1-efaa-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/6aeb45cc-e337-5379-a60e-e48aad9e5d5e",
//             "url": "https://www.nytimes.com/2023/01/02/arts/jeremy-renner-hospitalized.html",
//             "id": 100000008710630,
//             "asset_id": 100000008710630,
//             "source": "New York Times",
//             "published_date": "2023-01-02",
//             "updated": "2023-01-04 03:40:18",
//             "section": "Arts",
//             "subsection": "",
//             "nytdsection": "arts",
//             "adx_keywords": "Snow and Snowstorms;Actors and Actresses;Accidents and Safety;Renner, Jeremy;Lake Tahoe (Nev)",
//             "column": null,
//             "byline": "By Jenny Gross",
//             "type": "Article",
//             "title": "Jeremy Renner Is in Critical Condition After Snow Plowing Accident",
//             "abstract": "The actor, known for his role as Hawkeye in Marvel’s Avengers movies, had surgery, his representative said.",
//             "des_facet": [
//                 "Snow and Snowstorms",
//                 "Actors and Actresses",
//                 "Accidents and Safety"
//             ],
//             "org_facet": [],
//             "per_facet": [
//                 "Renner, Jeremy"
//             ],
//             "geo_facet": [
//                 "Lake Tahoe (Nev)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Jeremy Renner plays the superhero Hawkeye in Marvel movies and a television series.",
//                     "copyright": "Robyn Beck/Agence France-Presse — Getty Images",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/02/world/02xp-jeremy-renner/02xp-jeremy-renner-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/02/world/02xp-jeremy-renner/02xp-jeremy-renner-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/02/world/02xp-jeremy-renner/02xp-jeremy-renner-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/7692a62b-9e86-5b48-b7cc-372a32890633",
//             "url": "https://www.nytimes.com/2022/12/23/arts/music/tory-lanez-megan-thee-stallion-verdict.html",
//             "id": 100000008696158,
//             "asset_id": 100000008696158,
//             "source": "New York Times",
//             "published_date": "2022-12-23",
//             "updated": "2022-12-23 22:36:39",
//             "section": "Arts",
//             "subsection": "Music",
//             "nytdsection": "arts",
//             "adx_keywords": "Rap and Hip-Hop;Decisions and Verdicts;Assaults;Megan Thee Stallion (Rapper);Tory Lanez (Rapper);Los Angeles (Calif)",
//             "column": null,
//             "byline": "By Blanca Begert, Joe Coscarelli and Douglas Morino",
//             "type": "Article",
//             "title": "Tory Lanez Found Guilty of Shooting Megan Thee Stallion",
//             "abstract": "Mr. Lanez, a Canadian rapper, fired at the Houston hip-hop star after an argument in 2020. The matter became the subject of speculation and gossip on social media and in songs.",
//             "des_facet": [
//                 "Rap and Hip-Hop",
//                 "Decisions and Verdicts",
//                 "Assaults"
//             ],
//             "org_facet": [],
//             "per_facet": [
//                 "Megan Thee Stallion (Rapper)",
//                 "Tory Lanez (Rapper)"
//             ],
//             "geo_facet": [
//                 "Los Angeles (Calif)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Tory Lanez is driven away from a Los Angeles courthouse earlier this month. On Friday, he was convicted of three felony counts in the shooting of a fellow artist, Megan Thee Stallion.",
//                     "copyright": "Damian Dovarganes/Associated Press",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/22/multimedia/22megan-lanez-verdict-1-4b36/22megan-lanez-verdict-1-4b36-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/22/multimedia/22megan-lanez-verdict-1-4b36/22megan-lanez-verdict-1-4b36-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/22/multimedia/22megan-lanez-verdict-1-4b36/22megan-lanez-verdict-1-4b36-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/fad47856-7002-5263-99c3-86c89343f242",
//             "url": "https://www.nytimes.com/2022/12/30/us/idaho-murders-suspect-bryan-kohberger.html",
//             "id": 100000008708639,
//             "asset_id": 100000008708639,
//             "source": "New York Times",
//             "published_date": "2022-12-30",
//             "updated": "2023-01-05 20:55:21",
//             "section": "U.S.",
//             "subsection": "",
//             "nytdsection": "u.s.",
//             "adx_keywords": "Murders, Attempted Murders and Homicides;Colleges and Universities;Chapin, Ethan (d 2022);Goncalves, Kaylee (d 2022);Kernodle, Xana (d 2022);Mogen, Madison (d 2022);Kohberger, Bryan C;University of Idaho;Washington State University;Idaho;Moscow (Idaho)",
//             "column": null,
//             "byline": "By Rachel Sun, Nicholas Bogel-Burroughs and Serge F. Kovaleski",
//             "type": "Article",
//             "title": "Criminology Student Is Charged in 4 University of Idaho Killings",
//             "abstract": "The college town of Moscow, Idaho, has been reeling since the attack last month, but the police gave no motive for the murders.",
//             "des_facet": [
//                 "Murders, Attempted Murders and Homicides",
//                 "Colleges and Universities"
//             ],
//             "org_facet": [
//                 "University of Idaho",
//                 "Washington State University"
//             ],
//             "per_facet": [
//                 "Chapin, Ethan (d 2022)",
//                 "Goncalves, Kaylee (d 2022)",
//                 "Kernodle, Xana (d 2022)",
//                 "Mogen, Madison (d 2022)",
//                 "Kohberger, Bryan C"
//             ],
//             "geo_facet": [
//                 "Idaho",
//                 "Moscow (Idaho)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "A memorial in front of the rental house where the students were found dead, near the University of Idaho campus in Moscow.",
//                     "copyright": "Margaret Albaugh for The New York Times",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/30/multimedia/30nat-idaho-killings-new01-1-b595/30nat-idaho-killings-new01-1-b595-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/30/multimedia/30nat-idaho-killings-new01-1-b595/30nat-idaho-killings-new01-1-b595-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/30/multimedia/30nat-idaho-killings-new01-1-b595/30nat-idaho-killings-new01-1-b595-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/39d92992-08fc-5c11-a254-500c5e9b92de",
//             "url": "https://www.nytimes.com/2022/12/17/business/economy/california-san-francisco-empty-downtown.html",
//             "id": 100000008669743,
//             "asset_id": 100000008669743,
//             "source": "New York Times",
//             "published_date": "2022-12-17",
//             "updated": "2022-12-19 10:53:54",
//             "section": "Business",
//             "subsection": "Economy",
//             "nytdsection": "business",
//             "adx_keywords": "Real Estate (Commercial);Real Estate and Housing (Residential);Urban Areas;Computers and the Internet;internal-sub-only;Labor and Jobs;Quarantine (Life and Culture);Telecommuting;Yelp;Mixt (MG Restaurants Inc);San Francisco (Calif);San Francisco Bay Area (Calif)",
//             "column": null,
//             "byline": "By Conor Dougherty, Emma Goldberg and Aaron Wojack",
//             "type": "Article",
//             "title": "What Comes Next for the Most Empty Downtown in America",
//             "abstract": "Tech workers are still at home. The $17 salad place is expanding into the suburbs. So what is left in San Francisco?",
//             "des_facet": [
//                 "Real Estate (Commercial)",
//                 "Real Estate and Housing (Residential)",
//                 "Urban Areas",
//                 "Computers and the Internet",
//                 "internal-sub-only",
//                 "Labor and Jobs",
//                 "Quarantine (Life and Culture)",
//                 "Telecommuting"
//             ],
//             "org_facet": [
//                 "Yelp",
//                 "Mixt (MG Restaurants Inc)"
//             ],
//             "per_facet": [],
//             "geo_facet": [
//                 "San Francisco (Calif)",
//                 "San Francisco Bay Area (Calif)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "On any given week in San Francisco, office buildings are at about 40 percent of their prepandemic occupancy.",
//                     "copyright": "",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/16/multimedia/16Downtown-01-1-5966/16Downtown-01-1-5966-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/16/multimedia/16Downtown-01-1-5966/16Downtown-01-1-5966-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/16/multimedia/16Downtown-01-1-5966/16Downtown-01-1-5966-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/14527e14-3089-50d8-87f2-fc2f11080d28",
//             "url": "https://www.nytimes.com/2023/01/06/us/idaho-killings-investigation.html",
//             "id": 100000008716374,
//             "asset_id": 100000008716374,
//             "source": "New York Times",
//             "published_date": "2023-01-06",
//             "updated": "2023-01-12 08:12:28",
//             "section": "U.S.",
//             "subsection": "",
//             "nytdsection": "u.s.",
//             "adx_keywords": "Murders, Attempted Murders and Homicides;Colleges and Universities;DNA (Deoxyribonucleic Acid);Kohberger, Bryan C;Mogen, Madison (d 2022);Goncalves, Kaylee (d 2022);Kernodle, Xana (d 2022);Chapin, Ethan (d 2022);University of Idaho;Washington State University;Moscow (Idaho);Pullman (Wash)",
//             "column": null,
//             "byline": "By Mike Baker",
//             "type": "Article",
//             "title": "10 Key Revelations in the Idaho Murder Case",
//             "abstract": "Court records unsealed this week provided vital and unsettling new details about the night that four University of Idaho students were killed.",
//             "des_facet": [
//                 "Murders, Attempted Murders and Homicides",
//                 "Colleges and Universities",
//                 "DNA (Deoxyribonucleic Acid)"
//             ],
//             "org_facet": [
//                 "University of Idaho",
//                 "Washington State University"
//             ],
//             "per_facet": [
//                 "Kohberger, Bryan C",
//                 "Mogen, Madison (d 2022)",
//                 "Goncalves, Kaylee (d 2022)",
//                 "Kernodle, Xana (d 2022)",
//                 "Chapin, Ethan (d 2022)"
//             ],
//             "geo_facet": [
//                 "Moscow (Idaho)",
//                 "Pullman (Wash)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "",
//                     "copyright": "",
//                     "approved_for_syndication": 0,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/us/06idaho-highlight-promo/06idaho-highlight-promo-thumbStandard.png",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/us/06idaho-highlight-promo/06idaho-highlight-promo-mediumThreeByTwo210.png",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/us/06idaho-highlight-promo/06idaho-highlight-promo-mediumThreeByTwo440.png",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/3b4b2098-3f7b-5d44-aef5-1607cb49fbc5",
//             "url": "https://www.nytimes.com/2022/12/26/nyregion/george-santos-interview.html",
//             "id": 100000008703912,
//             "asset_id": 100000008703912,
//             "source": "New York Times",
//             "published_date": "2022-12-26",
//             "updated": "2022-12-28 19:09:20",
//             "section": "New York",
//             "subsection": "",
//             "nytdsection": "new york",
//             "adx_keywords": "United States Politics and Government;Midterm Elections (2022);Elections, House of Representatives;Ethics and Official Misconduct;Frauds and Swindling;Santos, George (1988- );Republican Party;Baruch College;House of Representatives;Citigroup Inc;Goldman Sachs Group Inc;Long Island (NY);Queens (NYC);New York State",
//             "column": null,
//             "byline": "By Michael Gold and Grace Ashford",
//             "type": "Article",
//             "title": "George Santos Admits to Lying About College and Work History",
//             "abstract": "The congressman-elect confirmed The New York Times’s findings that he had not graduated from college or worked at two major Wall Street firms, as he had claimed.",
//             "des_facet": [
//                 "United States Politics and Government",
//                 "Midterm Elections (2022)",
//                 "Elections, House of Representatives",
//                 "Ethics and Official Misconduct",
//                 "Frauds and Swindling"
//             ],
//             "org_facet": [
//                 "Republican Party",
//                 "Baruch College",
//                 "House of Representatives",
//                 "Citigroup Inc",
//                 "Goldman Sachs Group Inc"
//             ],
//             "per_facet": [
//                 "Santos, George (1988- )"
//             ],
//             "geo_facet": [
//                 "Long Island (NY)",
//                 "Queens (NYC)",
//                 "New York State"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Congressman-Elect George Santos at the Republican Jewish Coalition in Las Vegas in November.",
//                     "copyright": "Mikayla Whitmore for The New York Times",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/26/multimedia/26santos-1-1718/26santos-1-1718-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/26/multimedia/26santos-1-1718/26santos-1-1718-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/26/multimedia/26santos-1-1718/26santos-1-1718-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/00bdd9a3-5415-542e-a762-f0e04583e9a2",
//             "url": "https://www.nytimes.com/2022/12/22/video/russia-ukraine-bucha-massacre-takeaways.html",
//             "id": 100000008683013,
//             "asset_id": 100000008683013,
//             "source": "New York Times",
//             "published_date": "2022-12-22",
//             "updated": "2022-12-23 13:55:57",
//             "section": "Video",
//             "subsection": "",
//             "nytdsection": "video",
//             "adx_keywords": "Russian Invasion of Ukraine (2022);Defense and Military Forces;War Crimes, Genocide and Crimes Against Humanity;Civilian Casualties;Video Recordings, Downloads and Streaming;your-feed-visual-investigations;Gorodilov, Artyom;Russia;Bucha (Ukraine);Ukraine",
//             "column": null,
//             "byline": "By Yousur Al-Hlou, Masha Froliak, Dmitriy Khavin, Christoph Koettl, Haley Willis, Alexander Cardia, Natalie Reneau and Malachy Browne",
//             "type": "Article",
//             "title": "Caught on Camera, Traced by Phone: The Russian Military Unit That Killed Dozens in Bucha",
//             "abstract": "Exclusive evidence obtained in a monthslong investigation identifies the Russian regiment — and commander — behind one of the worst atrocities in Ukraine.",
//             "des_facet": [
//                 "Russian Invasion of Ukraine (2022)",
//                 "Defense and Military Forces",
//                 "War Crimes, Genocide and Crimes Against Humanity",
//                 "Civilian Casualties",
//                 "Video Recordings, Downloads and Streaming",
//                 "your-feed-visual-investigations"
//             ],
//             "org_facet": [],
//             "per_facet": [
//                 "Gorodilov, Artyom"
//             ],
//             "geo_facet": [
//                 "Russia",
//                 "Bucha (Ukraine)",
//                 "Ukraine"
//             ],
//             "media": [],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/f068d128-263e-5764-9ee9-e9354b91b061",
//             "url": "https://www.nytimes.com/2023/01/08/us/hamline-university-islam-prophet-muhammad.html",
//             "id": 100000008705794,
//             "asset_id": 100000008705794,
//             "source": "New York Times",
//             "published_date": "2023-01-08",
//             "updated": "2023-01-13 06:01:35",
//             "section": "U.S.",
//             "subsection": "",
//             "nytdsection": "u.s.",
//             "adx_keywords": "Colleges and Universities;Academic Freedom;Muslim Americans;Discrimination;Muslims and Islam;Freedom of Speech and Expression;Art;internal-sub-only;audio-neutral-informative;Lopez Prater, Erika;Gruber, Christiane;Hamline University;St Paul (Minn)",
//             "column": null,
//             "byline": "By Vimal Patel",
//             "type": "Article",
//             "title": "A Lecturer Showed a Painting of the Prophet Muhammad. She Lost Her Job.",
//             "abstract": "After an outcry over the art history class by Muslim students, Hamline University officials said the incident was Islamophobic. But many scholars say the work is a masterpiece.",
//             "des_facet": [
//                 "Colleges and Universities",
//                 "Academic Freedom",
//                 "Muslim Americans",
//                 "Discrimination",
//                 "Muslims and Islam",
//                 "Freedom of Speech and Expression",
//                 "Art",
//                 "internal-sub-only",
//                 "audio-neutral-informative"
//             ],
//             "org_facet": [
//                 "Hamline University"
//             ],
//             "per_facet": [
//                 "Lopez Prater, Erika",
//                 "Gruber, Christiane"
//             ],
//             "geo_facet": [
//                 "St Paul (Minn)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Officials at Hamline, in St. Paul, Minn., had tried to douse what they feared would become a runaway fire. Instead they ended embroiled in a national controversy.",
//                     "copyright": "Jenn Ackerman for The New York Times",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/multimedia/00nat-hamline-3-1c6b/00nat-hamline-3-1c6b-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/multimedia/00nat-hamline-3-1c6b/00nat-hamline-3-1c6b-mediumThreeByTwo210-v5.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/multimedia/00nat-hamline-3-1c6b/00nat-hamline-3-1c6b-mediumThreeByTwo440-v5.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/ae37c3de-c2bc-5cc1-bba0-0497b02b3157",
//             "url": "https://www.nytimes.com/2023/01/06/us/newport-news-school-shooting-virginia.html",
//             "id": 100000008717694,
//             "asset_id": 100000008717694,
//             "source": "New York Times",
//             "published_date": "2023-01-06",
//             "updated": "2023-01-11 11:04:52",
//             "section": "U.S.",
//             "subsection": "",
//             "nytdsection": "u.s.",
//             "adx_keywords": "Firearms;Children and Childhood;Education (K-12);Murders, Attempted Murders and Homicides;Teachers and School Employees;School Shootings and Armed Attacks;Newport News (Va)",
//             "column": null,
//             "byline": "By Livia Albeck-Ripka and Eduardo Medina",
//             "type": "Article",
//             "title": "6-Year-Old Shoots Teacher at Virginia Elementary School, Police Say",
//             "abstract": "A teacher at Richneck Elementary School in Newport News has “life-threatening injuries” after being shot by one of her students, the authorities said.",
//             "des_facet": [
//                 "Firearms",
//                 "Children and Childhood",
//                 "Education (K-12)",
//                 "Murders, Attempted Murders and Homicides",
//                 "Teachers and School Employees",
//                 "School Shootings and Armed Attacks"
//             ],
//             "org_facet": [],
//             "per_facet": [],
//             "geo_facet": [
//                 "Newport News (Va)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "A shooting in a classroom at Richneck Elementary School in Newport News, Va., happened on Friday after an altercation between a student and a teacher, officials said.",
//                     "copyright": "Billy Schuerman/The Virginian-Pilot, via Associated Press",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/multimedia/06xp-newport-shooting/06xp-newport-shooting-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/multimedia/06xp-newport-shooting/06xp-newport-shooting-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/06/multimedia/06xp-newport-shooting/06xp-newport-shooting-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/a4e7ee4b-b901-5dcf-b12c-3c7188f24855",
//             "url": "https://www.nytimes.com/2023/01/11/arts/music/jeff-beck-dead.html",
//             "id": 100000008511935,
//             "asset_id": 100000008511935,
//             "source": "New York Times",
//             "published_date": "2023-01-11",
//             "updated": "2023-01-12 11:04:23",
//             "section": "Arts",
//             "subsection": "Music",
//             "nytdsection": "arts",
//             "adx_keywords": "Deaths (Obituaries);Pop and Rock Music;Guitars;Beck, Jeff;Yardbirds",
//             "column": null,
//             "byline": "By Jim Farber",
//             "type": "Article",
//             "title": "Jeff Beck, Guitarist With a Chapter in Rock History, Dies at 78",
//             "abstract": "His playing with the Yardbirds and as leader of his own bands brought a sense of adventure to their groundbreaking recordings.",
//             "des_facet": [
//                 "Deaths (Obituaries)",
//                 "Pop and Rock Music",
//                 "Guitars"
//             ],
//             "org_facet": [
//                 "Yardbirds"
//             ],
//             "per_facet": [
//                 "Beck, Jeff"
//             ],
//             "geo_facet": [],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Jeff Beck performing in 1969. He was one of the most influential guitarists in rock history.",
//                     "copyright": "David Redfern/Redferns, via Getty Images",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/12/obituaries/11Beck1-print1/11Beck1-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/12/obituaries/11Beck1-print1/11Beck1-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/12/obituaries/11Beck1-print1/11Beck1-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/ae5d3188-3139-5479-b87d-c6c548892ed4",
//             "url": "https://www.nytimes.com/2023/01/01/us/bryan-kohberger-idaho-murders.html",
//             "id": 100000008709644,
//             "asset_id": 100000008709644,
//             "source": "New York Times",
//             "published_date": "2023-01-01",
//             "updated": "2023-01-05 20:54:49",
//             "section": "U.S.",
//             "subsection": "",
//             "nytdsection": "u.s.",
//             "adx_keywords": "Colleges and Universities;Murders, Attempted Murders and Homicides;Forensic Science;Chapin, Ethan (d 2022);Goncalves, Kaylee (d 2022);Kernodle, Xana (d 2022);Kohberger, Bryan C;Mogen, Madison (d 2022);University of Idaho;Washington State University;Idaho;Moscow (Idaho)",
//             "column": null,
//             "byline": "By Nicholas Bogel-Burroughs, Rachel Sun, Mike Baker and Serge F. Kovaleski",
//             "type": "Article",
//             "title": "Idaho Murder Suspect Had Been a Student of the Criminal Mind",
//             "abstract": "The arrest of a graduate student in the murder of four University of Idaho students eased fears but raised a troubling new question: What was the motive?",
//             "des_facet": [
//                 "Colleges and Universities",
//                 "Murders, Attempted Murders and Homicides",
//                 "Forensic Science"
//             ],
//             "org_facet": [
//                 "University of Idaho",
//                 "Washington State University"
//             ],
//             "per_facet": [
//                 "Chapin, Ethan (d 2022)",
//                 "Goncalves, Kaylee (d 2022)",
//                 "Kernodle, Xana (d 2022)",
//                 "Kohberger, Bryan C",
//                 "Mogen, Madison (d 2022)"
//             ],
//             "geo_facet": [
//                 "Idaho",
//                 "Moscow (Idaho)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "The house where four University of Idaho students were found dead on Nov. 13 in Moscow, Idaho.",
//                     "copyright": "Ted S. Warren/Associated Press",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/01/multimedia/01NAT-MOSCOW-KILLINGS-1-1-aa7f/01NAT-MOSCOW-KILLINGS-1-1-aa7f-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/01/multimedia/01NAT-MOSCOW-KILLINGS-1-1-aa7f/01NAT-MOSCOW-KILLINGS-1-1-aa7f-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/01/multimedia/01NAT-MOSCOW-KILLINGS-1-1-aa7f/01NAT-MOSCOW-KILLINGS-1-1-aa7f-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/c0429e51-19c7-5c34-b5ae-8e4a166bfb72",
//             "url": "https://www.nytimes.com/2022/12/30/us/politics/trump-tax-returns-takeaways.html",
//             "id": 100000008707844,
//             "asset_id": 100000008707844,
//             "source": "New York Times",
//             "published_date": "2022-12-30",
//             "updated": "2023-01-03 15:30:49",
//             "section": "U.S.",
//             "subsection": "Politics",
//             "nytdsection": "u.s.",
//             "adx_keywords": "Trump Tax Returns;Tax Credits, Deductions and Exemptions;Tax Evasion;Income Tax;United States Politics and Government;internal-sub-only;Trump, Donald J",
//             "column": null,
//             "byline": "By Jim Tankersley, Susanne Craig and Russ Buettner",
//             "type": "Article",
//             "title": "Key Takeaways From Trump’s Tax Returns",
//             "abstract": "Former President Donald J. Trump, who fought for years to keep his returns private, made no charitable donations in 2020, and his own tax law may have cost him. Here’s a running list of insights.",
//             "des_facet": [
//                 "Trump Tax Returns",
//                 "Tax Credits, Deductions and Exemptions",
//                 "Tax Evasion",
//                 "Income Tax",
//                 "United States Politics and Government",
//                 "internal-sub-only"
//             ],
//             "org_facet": [],
//             "per_facet": [
//                 "Trump, Donald J"
//             ],
//             "geo_facet": [],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Former President Donald J. Trump and other Republicans raised the threat of retaliation for Democrats’ release of his tax returns. ",
//                     "copyright": "Ash Adams for The New York Times",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/30/multimedia/30dc-takeaways-1-653a/30dc-takeaways-1-653a-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/30/multimedia/30dc-takeaways-1-653a/30dc-takeaways-1-653a-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2022/12/30/multimedia/30dc-takeaways-1-653a/30dc-takeaways-1-653a-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/8d431def-cca8-5731-97c0-cf78718de9b5",
//             "url": "https://www.nytimes.com/2023/01/07/technology/digital-cameras-olympus-canon.html",
//             "id": 100000008704646,
//             "asset_id": 100000008704646,
//             "source": "New York Times",
//             "published_date": "2023-01-07",
//             "updated": "2023-01-08 12:08:11",
//             "section": "Technology",
//             "subsection": "",
//             "nytdsection": "technology",
//             "adx_keywords": "Generation Z;Cameras;Photography;Social Media;Smartphones;Computers and the Internet;internal-sub-only",
//             "column": null,
//             "byline": "By Kalley Huang",
//             "type": "Article",
//             "title": "The Hottest Gen Z Gadget Is a 20-Year-Old Digital Camera",
//             "abstract": "Young people are opting for point-and-shoots and blurry photos.",
//             "des_facet": [
//                 "Generation Z",
//                 "Cameras",
//                 "Photography",
//                 "Social Media",
//                 "Smartphones",
//                 "Computers and the Internet",
//                 "internal-sub-only"
//             ],
//             "org_facet": [],
//             "per_facet": [],
//             "geo_facet": [],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Sadie Grey Strosser started photographing with a point-and-shoot digital camera when she took a semester off from school.",
//                     "copyright": "Sadie Grey Strosser",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/08/business/07digital-cameras-02/07digital-cameras-02-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/08/business/07digital-cameras-02/07digital-cameras-02-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/08/business/07digital-cameras-02/07digital-cameras-02-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/e62c6caa-f947-51cb-99ca-f4d10ef2f2da",
//             "url": "https://www.nytimes.com/2023/01/03/us/jeremy-renner-accident-snow-plow.html",
//             "id": 100000008712706,
//             "asset_id": 100000008712706,
//             "source": "New York Times",
//             "published_date": "2023-01-03",
//             "updated": "2023-01-04 03:34:48",
//             "section": "U.S.",
//             "subsection": "",
//             "nytdsection": "u.s.",
//             "adx_keywords": "Snow and Snowstorms;Traffic Accidents and Safety;Automobiles;Actors and Actresses;Renner, Jeremy;Marvel Entertainment;Paramount Pictures;Reno (Nev);Washoe County (Nev)",
//             "column": null,
//             "byline": "By Livia Albeck-Ripka",
//             "type": "Article",
//             "title": "Jeremy Renner Was Run Over by 7-Ton Snow Plow, Authorities Say",
//             "abstract": "The 51-year-old Marvel actor, who remained in a critical but stable condition on Tuesday, said in an Instagram post that he was “too messed up now to type,” but sent his love.",
//             "des_facet": [
//                 "Snow and Snowstorms",
//                 "Traffic Accidents and Safety",
//                 "Automobiles",
//                 "Actors and Actresses"
//             ],
//             "org_facet": [
//                 "Marvel Entertainment",
//                 "Paramount Pictures"
//             ],
//             "per_facet": [
//                 "Renner, Jeremy"
//             ],
//             "geo_facet": [
//                 "Reno (Nev)",
//                 "Washoe County (Nev)"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Jeremy Renner at the premiere of the Marvel mini-series “Hawkeye” in Los Angeles in 2021.",
//                     "copyright": "Robyn Beck/Agence France-Presse — Getty Images",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/03/multimedia/03xp-renner-1-ed7c/03xp-renner-1-ed7c-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/03/multimedia/03xp-renner-1-ed7c/03xp-renner-1-ed7c-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/03/multimedia/03xp-renner-1-ed7c/03xp-renner-1-ed7c-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/3991caeb-c0bc-5ddd-8a14-9d2c9fd54fbd",
//             "url": "https://www.nytimes.com/2023/01/10/books/prince-harry-spare-book.html",
//             "id": 100000008719624,
//             "asset_id": 100000008719624,
//             "source": "New York Times",
//             "published_date": "2023-01-10",
//             "updated": "2023-01-10 21:38:31",
//             "section": "Books",
//             "subsection": "",
//             "nytdsection": "books",
//             "adx_keywords": "Books and Literature;Royal Families;Content Type: Personal Profile;Harry, Duke of Sussex;Markle, Meghan;Diana, Princess of Wales;William, Duke of Cambridge;King Charles;Great Britain",
//             "column": null,
//             "byline": "By The New York Times Books Staff",
//             "type": "Article",
//             "title": "11 Takeaways From Prince Harry’s Memoir, ‘Spare’",
//             "abstract": "The much-anticipated book offers few revelations, in the wake of leaks and high-profile interviews, but it tucks familiar incidents into a broader narrative.",
//             "des_facet": [
//                 "Books and Literature",
//                 "Royal Families",
//                 "Content Type: Personal Profile"
//             ],
//             "org_facet": [],
//             "per_facet": [
//                 "Harry, Duke of Sussex",
//                 "Markle, Meghan",
//                 "Diana, Princess of Wales",
//                 "William, Duke of Cambridge",
//                 "King Charles"
//             ],
//             "geo_facet": [
//                 "Great Britain"
//             ],
//             "media": [
//                 {
//                     "type": "image",
//                     "subtype": "photo",
//                     "caption": "Prince Harry’s memoir shows two brothers often at odds and details other family rifts.",
//                     "copyright": "Dominic Lipinski/Agence France-Presse — Getty Images",
//                     "approved_for_syndication": 1,
//                     "media-metadata": [
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/09/multimedia/00HARRY-TAKEAWAYS-1-18d1/00HARRY-TAKEAWAYS-1-18d1-thumbStandard.jpg",
//                             "format": "Standard Thumbnail",
//                             "height": 75,
//                             "width": 75
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/09/multimedia/00HARRY-TAKEAWAYS-1-18d1/00HARRY-TAKEAWAYS-1-18d1-mediumThreeByTwo210.jpg",
//                             "format": "mediumThreeByTwo210",
//                             "height": 140,
//                             "width": 210
//                         },
//                         {
//                             "url": "https://static01.nyt.com/images/2023/01/09/multimedia/00HARRY-TAKEAWAYS-1-18d1/00HARRY-TAKEAWAYS-1-18d1-mediumThreeByTwo440.jpg",
//                             "format": "mediumThreeByTwo440",
//                             "height": 293,
//                             "width": 440
//                         }
//                     ]
//                 }
//             ],
//             "eta_id": 0
//         },
//         {
//             "uri": "nyt://article/baa3c587-c519-5703-8330-110392fa70ae",
//             "url": "https://www.nytimes.com/article/damar-hamlin-injury-update.html",
//             "id": 100000008713233,
//             "asset_id": 100000008713233,
//             "source": "New York Times",
//             "published_date": "2023-01-04",
//             "updated": "2023-01-12 00:28:40",
//             "section": "Sports",
//             "subsection": "N.F.L.",
//             "nytdsection": "sports",
//             "adx_keywords": "Football;Sports Injuries;Hamlin, Damar (1998- );Buffalo Bills;National Football League",
//             "column": null,
//             "byline": "By Victor Mather",
//             "type": "Article",
//             "title": "What to Know About Damar Hamlin’s Injury",
//             "abstract": "Hamlin, a Buffalo Bills safety, went into cardiac arrest following a routine tackle.",
//             "des_facet": [
//                 "Football",
//                 "Sports Injuries"
//             ],
//             "org_facet": [
//                 "Buffalo Bills",
//                 "National Football League"
//             ],
//             "per_facet": [
//                 "Hamlin, Damar (1998- )"
//             ],
//             "geo_facet": [],
//             "media": [],
//             "eta_id": 0
//         }
//     ]
// }
