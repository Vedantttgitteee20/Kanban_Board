
import Styles from '../css/Cards.module.css'

const Cards = (props) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardId}>{props.id}</div>
      <div className={Styles.cardTitle}>{props.title}</div>
    </div>
  );
}

export default Cards;