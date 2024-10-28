import useWishlist from "@hooks/useWishlist";
import { Heading } from "@components/Common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import GridList from "@components/Common/GridList/GridList";

function Wishlist() {
  const { loading, error, records } = useWishlist();
  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error} type="cart">
        <>
          <GridList
            emptyMessage="Your wishlist is empty"
            records={records}
            renderItem={(record) => <Product {...record} />}
          />
        </>
      </Loading>
    </>
  );
}

export default Wishlist;
