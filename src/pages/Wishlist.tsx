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
          {records.length > 0 ? (
            <GridList
              records={records}
              renderItem={(record) => <Product {...record} />}
            />
          ) : (
            "Your wishlist is empty"
          )}
        </>
      </Loading>
    </>
  );
}

export default Wishlist;
