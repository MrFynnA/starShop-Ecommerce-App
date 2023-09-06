import classes from './Card.module.css';

const Card = (props) => {
  return (
    <section
      style={{
        width:`${props.minwidth ? props.minwidth : undefined}`,
        backgroundColor:`${props.backgroundcolor ? props.backgroundcolor : 'white'}`,
        borderRadius:`${props.borderradius ? props.borderradius : undefined}`
      
      }}className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
