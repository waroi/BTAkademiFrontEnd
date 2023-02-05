import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useCategory } from "../context/CategoryContext";
import { useProduct } from "../context/ProductContext";

function AddProductForm({ handleClose }) {
  const { addProduct } = useProduct();
  const { categories } = useCategory();
  const categoryIdRef = useRef();
  const productNameRef = useRef();
  const productDescriptonRef = useRef();
  const productGramRef = useRef();
  const productPriceRef = useRef();
  const productVisibleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(
      categoryIdRef.current.value,
      productNameRef.current.value,
      productPriceRef.current.value,
      productDescriptonRef.current.value,
      productGramRef.current.value,
      productVisibleRef.current.checked
    );
    handleClose();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Kategori</Form.Label>
        <Form.Select size="sm" ref={categoryIdRef}>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ürün Adı</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün adı"
          size="sm"
          ref={productNameRef}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Satış Fiyatı</Form.Label>
        <InputGroup size="sm">
          <Form.Control
            type="number"
            placehoplder="Ürün fiyatı"
            ref={productPriceRef}
          />
          <InputGroup.Text className="bg-light">₺</InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gramaj</Form.Label>
        <InputGroup size="sm">
          <Form.Control
            type="number"
            placehoplder="Ürün fiyatı"
            ref={productGramRef}
          />
          <InputGroup.Text className="bg-light">gr</InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ürün ile ilgili içerik açıklaması</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          size="sm"
          ref={productDescriptonRef}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="switch"
          label="Ürün stokta var"
          ref={productVisibleRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit" size="sm">
        Kaydet
      </Button>
    </Form>
  );
}

export default AddProductForm;
