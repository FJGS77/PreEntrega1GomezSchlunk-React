import Cart from "../assets/Cart.svg";

const CartWidget = () => {
  return (
    <>
      <div className="flex">
        <img src={Cart} alt="carrito" />
        <span className="text-white">(2)</span>
      </div>
    </>
  );
};

export default CartWidget;
