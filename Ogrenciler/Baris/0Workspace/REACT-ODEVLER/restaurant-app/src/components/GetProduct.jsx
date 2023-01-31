import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";
import { useProduct } from "../context/ProductContext";

const GetProduct = () => {
  const { products, deleteProduct } = useProduct();
  return (
    <Card className="shadow-lg">
      <Card.Header className="d-flex justify-content-between align-items-center">
        Ürün Listesi
        <AddProduct />
      </Card.Header>
      <Card.Body>
        <Table hover responsive borderless size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ürün Adı</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td width="100px">
                    <ButtonGroup size="sm">
                      <Button
                        onClick={() => deleteProduct(product.id)}
                        variant="danger"
                      >
                        Sil
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default GetProduct;
