import React from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";

const SendPost = () => {
  return (
    <Form>
      <h2>Yeni Post</h2>
      <Input
        inputId="subject"
        labelName="Konu"
        icon={<i class="fa-solid fa-heading"></i>}
      />
      <Input
        inputId="auth"
        labelName="Yazar"
        icon={<i class="fa-solid fa-at"></i>}
      />
      <Textarea
        inputId="post"
        labelName="İçerik"
        icon={<i class="fa-solid fa-comment"></i>}
      />
      <ButtonGroup>
        <Button color="primary">
          {<i class="fa-solid fa-paper-plane"></i>} Paylaş
        </Button>
        <Button color="secondary">
          {<i class="fa-solid fa-broom"></i>} Temizle
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default SendPost;
