import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddCategoryForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>
          Kategori ID{" "}
          <small className="fst-italic fw-lighter">(otomatik verir)</small>
        </Form.Label>
        <Form.Control type="text" size="sm" readOnly />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Kategori Adı</Form.Label>
        <Form.Control type="text" placeholder="Kategori adı girin" size="sm" />
      </Form.Group>
      <Button variant="primary" type="submit" size="sm">
        Kaydet
      </Button>
    </Form>
  );
}

export default AddCategoryForm;
