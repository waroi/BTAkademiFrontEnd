import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
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
        icon={<i className="fa-solid fa-heading"></i>}
      />
      <Input
        inputId="auth"
        labelName="Yazar"
        icon={<i className="fa-solid fa-at"></i>}
      />
      <Textarea
        inputId="post"
        labelName="İçerik"
        icon={<i className="fa-solid fa-comment"></i>}
      />
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
