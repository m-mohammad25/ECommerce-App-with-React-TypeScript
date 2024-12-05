import { Table, Modal } from "react-bootstrap";
import { Heading } from "@components/Common";
import { Loading } from "@components/feedback";
import { ProductInfo } from "@components/eCommerce";
import useOrders from "@hooks/useOrders";

function Orders() {
  const {
    loading,
    error,
    showModal,
    orderList,
    selectedProduct,
    viewProductsDetails,
    closeModalHandler,
  } = useOrders();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>

      <Heading title="My Orders" />
      <Loading status={loading} error={error} type="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((el) => (
              <tr key={el.id}>
                <td>#{el.id}</td>
                <td>
                  {el.items.length}
                  {" / "}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => viewProductsDetails(el.id)}
                  >
                    Products Details
                  </span>
                </td>
                <td>{el.total}$</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
    </>
  );
}

export default Orders;
