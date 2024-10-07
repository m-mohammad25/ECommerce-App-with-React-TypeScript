import style from "./style.module.css";

function CartSubtotal() {
  return (
    <div className={style.container}>
      <span>Subtotal:</span>
      <span>200.00$</span>
    </div>
  );
}

export default CartSubtotal;
