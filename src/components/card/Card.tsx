import { CardProp } from '../../types/index';
import './Card.sass';

const Card = ({ product }: CardProp) => {
  return <div className="card">{product.title}</div>;
};

export default Card;
