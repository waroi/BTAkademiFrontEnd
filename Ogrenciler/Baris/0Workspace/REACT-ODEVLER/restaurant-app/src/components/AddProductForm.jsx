import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddProductForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Kategori</Form.Label>
        <Form.Select size="sm">
          <option>...</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ürün Adı</Form.Label>
        <Form.Control type="text" placeholder="Ürün adı girin" size="sm" />
      </Form.Group>
      <Button variant="primary" type="submit" size="sm">
        Kaydet
      </Button>
    </Form>
  );
}

export default AddProductForm;
