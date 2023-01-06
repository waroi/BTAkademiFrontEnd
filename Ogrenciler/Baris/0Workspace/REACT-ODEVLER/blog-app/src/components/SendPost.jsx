import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";
import InputGroup from "./InputGroup";
import { useState } from "react";

const SendPost = () => {
  const [post, setPost] = useState({});
  // const [postId, setPostId] = useState();
  // const [postSubject, setPostSubject] = useState();
  // const [postText, setPostText] = useState();
  // const [postAuthor, setPostAuthor] = useState();
  // const [postDate, setPostDate] = useState();

  const handleChange = (e) => {
    setPost({ [e.target.name]: e.target.value });

    //
    // setPost({
    //   id: Date.now(),
    //   subject: e.target.name === "subject" ? e.target.value : null,
    //   text: e.target.name === "text" ? e.target.value : null,
    //   author: e.target.name === "author" ? e.target.value : null,
    //   date: new Date(),
    // });

    //
    // setPostId(Date.now());
    // setPostSubject(e.target.name === "subject" ? e.target.value : null);
    // setPostText(e.target.name === "text" ? e.target.value : null);
    // setPostAuthor(e.target.name === "author" ? e.target.value : null);
    // setPostDate(new Date());
  };

  const handleSubmit = () => {
    // console.log(postSubject);

    // const newPost = {
    //   id: postId,
    //   subject: postSubject,
    //   text: postText,
    //   author: postAuthor,
    //   date: postDate,
    // };
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    };
    fetch("http://localhost:3000/posts", option);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Yeni Post</h2>
      <InputGroup>
        <Label htmlFor="subject">
          {<i className="fa-solid fa-heading"></i>} Konu
        </Label>
        <Input
          id="subject"
          type="text"
          name="subject"
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="author">
          {<i className="fa-solid fa-at"></i>} Yazar
        </Label>
        <Input id="author" type="text" name="author" onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="text">
          {<i className="fa-solid fa-comment"></i>} Gönderilecek Post
        </Label>
        <Textarea id="text" rows={10} name="text" onChange={handleChange} />
      </InputGroup>
      <ButtonGroup>
        <Button color="primary">
          {<i className="fa-solid fa-paper-plane"></i>} Paylaş
        </Button>
        <Button color="secondary" type="reset">
          {<i className="fa-solid fa-broom"></i>} Temizle
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default SendPost;
