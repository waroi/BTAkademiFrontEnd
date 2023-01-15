import React from "react";
import SubmitButton from "../components/SubmitButton";
import Form from "../components/Form";
import Container from "../components/Container";
import InputGroup from "../components/InputGroup";

const ContactView = () => {
  return (
    <Container>
      <Form>
        <InputGroup>
          <label htmlFor="">Adınız:</label>
          <input type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="">Soyadınız:</label>
          <input type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="">Email adresiniz:</label>
          <input type="email" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="">Mesajınız:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </InputGroup>
        <SubmitButton>Gönder</SubmitButton>
      </Form>
    </Container>
  );
};

export default ContactView;
