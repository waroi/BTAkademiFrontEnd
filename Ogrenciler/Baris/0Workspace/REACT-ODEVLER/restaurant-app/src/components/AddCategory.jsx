import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useCategory } from "../context/CategoryContext";
import AddCategoryForm from "./AddCategoryForm";

function AddCategory() {
  const [show, setShow] = useState(false);
  const { categories } = useCategory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [categories]);
  return (
    <>
      <Button variant="outline-link" onClick={handleShow} size="sm">
        Ekle
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Kategori Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCategoryForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCategory;
