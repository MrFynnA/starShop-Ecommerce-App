import classes from './CartCover.module.css';

const CartCover = (props) => {
  return (
    <section
      className={`${classes.cardCart} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default CartCover;