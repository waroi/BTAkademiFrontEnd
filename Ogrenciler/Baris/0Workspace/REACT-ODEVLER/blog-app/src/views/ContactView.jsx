import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Col from "../components/Col";
import Container from "../components/Container";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import Label from "../components/Label";
import Row from "../components/Row";
import TextArea from "../components/TextArea";

const ContactView = () => {
  const subjectRef = useRef();
  const mailRef = useRef();
  const messageRef = useRef();
  const [, setPosts] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      subject: subjectRef.current.value,
      mail: mailRef.current.value,
      message: messageRef.current.value,
    };
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    };
    const data = await fetch("http://localhost:3000/contacts", request);
    setPosts(data);
    navigate("/contact");
  };
  return (
    <Container>
      <Row>
        <Col>
          <h4>İletişim & Destek Formu</h4>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <InputGroup>
              <Label>
                <i className="fa-solid fa-heading"></i> Konu
              </Label>
              <Input type="text" ref={subjectRef} />
            </InputGroup>

            <InputGroup>
              <Label>
                <i className="fa-solid fa-envelope"></i> E-Posta
              </Label>
              <Input type="email" ref={mailRef} />
            </InputGroup>

            <InputGroup>
              <Label>
                <i className="fa-solid fa-message"></i> Mesaj
              </Label>
              <TextArea rows={10} ref={messageRef} />
            </InputGroup>
            <ButtonGroup>
              <Button color="primary">Gönder</Button>
              <Button color="secondary" type="reset">
                Temizle
              </Button>
            </ButtonGroup>
          </form>
        </Col>
        <Col>
          <h4>Harita</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25315.277226967024!2d42.4492725277049!3d37.52183953842107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40095432a08a30f5%3A0xa7cc750d3927015!2zxZ7EsXJuYWssIMWexLFybmFrIE1lcmtlei_FnsSxcm5haw!5e0!3m2!1str!2str!4v1673470667932!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "8px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactView;
