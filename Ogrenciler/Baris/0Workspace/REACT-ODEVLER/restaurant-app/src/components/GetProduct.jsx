import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";

const GetProduct = () => {
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td width="100px">
                <ButtonGroup size="sm">
                  <Button variant="warning">Düzenle</Button>
                  <Button variant="danger">Sil</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default GetProduct;
