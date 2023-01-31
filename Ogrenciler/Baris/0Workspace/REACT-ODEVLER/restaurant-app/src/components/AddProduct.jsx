import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useCategory } from "../context/CategoryContext";
import AddProductForm from "./AddProductForm";

function AddProduct() {
  const [show, setShow] = useState(false);
  const { products } = useCategory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [products]);
  return (
    <>
      <Button variant="outline-link" onClick={handleShow} size="sm">
        Ekle
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ürün Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddProduct;
