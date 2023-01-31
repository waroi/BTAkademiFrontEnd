import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCategory } from "../context/CategoryContext";

function AddCategoryForm() {
  const { addCategory } = useCategory();
  const categoryNameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(categoryNameRef.current.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Kategori Adı</Form.Label>
        <Form.Control
          type="text"
          placeholder="Kategori adı girin"
          size="sm"
          ref={categoryNameRef}
        />
      </Form.Group>
      <Button variant="primary" size="sm" type="submit">
        Kaydet
      </Button>
    </Form>
  );
}

export default AddCategoryForm;
