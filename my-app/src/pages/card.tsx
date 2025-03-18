import { Link, NavLink } from "react-router";
import "./card.css";

interface CardProps {
  name: string;
  image: string;
  id: string;
}

const Card = ({ name, image, id }: CardProps) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
