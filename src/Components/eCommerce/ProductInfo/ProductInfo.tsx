import styles from "./style.module.css";

type productInfoProps = {
  title: string;
  price: number;
  img: string;
  children: React.ReactNode;
  direction?: "row" | "column";
  style?: React.CSSProperties;
};

function ProductInfo({
  title,
  price,
  img,
  children,
  direction = "row",
  style,
}: productInfoProps) {
  return (
    <>
      <div className={`${styles[`product-${direction}`]}`} style={style}>
        <div className={`${styles[`productImg-${direction}`]}`}>
          <img src={img} alt={title} />
        </div>
        <div className={`${styles[`productInfo-${direction}`]}`}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)} $</h3>
          {children}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
