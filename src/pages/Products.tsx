import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import GridList from "@components/Common/GridList/GridList";
import { Heading } from "@components/Common";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const { loading, error, productFullInfo, prefix } = useProducts();

  return (
    <Container>
      <Heading title={`${prefix} Products`} />
      <Loading status={loading} error={error} type={"product"}>
        <>
          {
            <GridList
              records={productFullInfo}
              renderItem={(record) => <Product {...record} />}
            />
          }
        </>
      </Loading>
    </Container>
  );
};

export default Products;
