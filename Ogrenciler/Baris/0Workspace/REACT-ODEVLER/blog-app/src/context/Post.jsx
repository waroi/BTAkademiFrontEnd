import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  CardText,
} from "../components/Card";
const Post = ({ title, text, author, date }) => {
  let denemeText = ` Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Atque fugiat temporibus quisquam beatae debitis
            voluptate modi, obcaecati voluptates, quis maiores tempora dolores
            et sunt nisi odit ratione! Aliquam tenetur voluptatum minus
            voluptates incidunt quibusdam architecto quam similique impedit
            facere, debitis quo nam facilis blanditiis perspiciatis inventore et
            commodi ducimus vero dolorum alias consectetur, repellat fugit!
            Aliquam tempora maiores atque debitis quisquam facilis aliquid
            accusantium eos ex nesciunt distinctio molestiae sit autem fuga
            omnis fugiat consectetur nostrum eaque id, rem velit ipsam, rerum
            blanditiis. Amet ad, eligendi magni praesentium architecto rem
            deleniti aliquam porro alias? Asperiores natus tenetur, nisi facere
            sapiente labore doloribus consequuntur numquam aliquam quas
            repudiandae ratione harum recusandae, nulla adipisci vitae mollitia,
            delectus corporis! Totam aut assumenda quas, consectetur fugiat
            aperiam modi debitis perspiciatis, nisi nesciunt sequi rem fugit
            incidunt, sapiente autem cumque. Maxime, nihil sunt ea culpa ipsa ad
            blanditiis reiciendis ut consectetur vel error, officia dicta.
            Architecto quae dolore corrupti dolorem est. Porro perspiciatis
            quidem nemo, iusto quo maiores blanditiis fuga eveniet inventore
            quibusdam quam ipsa quis corrupti beatae facilis veritatis
            exercitationem sunt, dicta eligendi voluptates itaque reiciendis,
            rem a! Unde excepturi vel enim distinctio tempora recusandae libero
            nulla ratione. Nihil nostrum beatae illo temporibus in
            necessitatibus id inventore, ipsam ab autem voluptate ipsa, hic
            provident sequi laboriosam tempore, corrupti at veniam iste?
            Accusamus quae voluptas atque odio sequi commodi incidunt omnis,
            perferendis maiores, unde possimus ipsa! Veniam soluta mollitia
            iusto commodi nostrum? Officiis, blanditiis! Iusto laboriosam,
            similique nisi consequuntur ipsum aliquam doloribus molestias
            laborum necessitatibus quibusdam maxime nobis soluta ab, neque
            placeat. Beatae ad et culpa, necessitatibus voluptate debitis
            veritatis aliquid sint reiciendis repellendus, quia voluptatum nobis
            commodi voluptatibus nisi quo consequatur recusandae autem ratione
            accusantium! Maiores sit eum numquam officiis. Exercitationem,
            reiciendis ducimus eos facilis ipsum nulla cum. Ipsum incidunt,
            perferendis hic neque deleniti aspernatur libero, autem
            reprehenderit distinctio, similique suscipit? Perferendis totam
            cupiditate officiis, quasi ab fugit. Ea assumenda mollitia quod,
            alias explicabo tempora neque fugit maiores quaerat deserunt saepe,
            necessitatibus provident repellendus fugiat magni repudiandae cum
            aut placeat hic atque ipsum? Cumque libero officia maiores sunt
            illum reprehenderit, quis accusantium asperiores facere magni et
            placeat, doloribus est? Molestias fuga magni numquam dicta, omnis
            aliquid repudiandae culpa labore voluptatem officia vel similique,
            sit ratione, quidem enim dolorem excepturi sunt maiores magnam.
            Possimus nisi ipsum odit placeat architecto omnis neque veniam,
            numquam dolorem provident totam maxime earum aspernatur. Eos
            perspiciatis magnam perferendis voluptatem deleniti fugiat natus,
            nam, facilis amet voluptates minima placeat excepturi possimus ad
            dicta nihil debitis, molestiae autem omnis itaque libero facere
            aperiam! Officiis voluptas dolorum repudiandae molestiae
            consequuntur velit iste? Maxime consequatur veniam eum culpa
            accusamus placeat! Adipisci, suscipit eligendi quo perferendis
            alias, neque, aut labore consectetur aliquam saepe consequuntur
            illum. Suscipit minus porro quasi praesentium alias voluptatibus rem
            ut vitae sapiente, laboriosam aut neque cupiditate! Suscipit quaerat
            deleniti culpa! Asperiores ullam eveniet iusto ut eaque deleniti
            facilis ad numquam recusandae fugit, culpa quibusdam nemo iure dolor
            quod minima odio sunt praesentium, inventore nesciunt dignissimos
            corporis assumenda quidem nobis! Sapiente, vitae.`;
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Header: Lorem ipsum dolor sit amet.</CardTitle>
        </CardHeader>
        <CardBody>
          <img
            src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/66e9b8d33af1f86e90a3afafd9a90ec2"
            alt=""
            width="200px"
            height="200px"
          />
          <CardText>{denemeText.slice(0, 500)}...</CardText>
        </CardBody>
        <CardFooter>
          <small>
            Footer: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Suscipit, delectus?
          </small>
        </CardFooter>
      </Card>
    </>
  );
};

export default Post;
