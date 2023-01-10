import React, { useRef, useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import Container from "../components/Container";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import Label from "../components/Label";
import TextArea from "../components/TextArea";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const NewPostView = () => {
  const [, setPost] = useState({});
  const navigate = useNavigate();
  const titleRef = useRef();
  const authorRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const newPost = {
      id: Date.now(),
      title: titleRef.current.value,
      img: imageRef.current.value,
      text: textRef.current.value,
      author: authorRef.current.value,
      date: date.toLocaleDateString(),
    };

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    };
    const data = await fetch("http://localhost:3000/posts", request);
    setPost(data);
    navigate("/");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="textTitle">
            <i className="fa-solid fa-heading"></i> Başlık
          </Label>
          <Input
            id="textTitle"
            type="text"
            placeholder="Başlık"
            ref={titleRef}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="textAuthor">
            <i className="fa-solid fa-user"></i> Yazar
          </Label>
          <Input
            id="textAuthor"
            type="text"
            placeholder="Yazar"
            ref={authorRef}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="textImage">
            <i className="fa-solid fa-image"></i> Fotoğraf
          </Label>
          <Input
            id="textImage"
            type="text"
            placeholder="Fotoğraf linki"
            ref={imageRef}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="textPost">
            <i className="fa-solid fa-signs-post"></i> Post içeriği
          </Label>
          <TextArea
            id="textPost"
            rows={10}
            placeholder="Post..."
            ref={textRef}
          />
        </InputGroup>
        <ButtonGroup>
          <Button color="primary">Gönder</Button>
          <Button type="reset" color="secondary">
            Temizle
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default NewPostView;
