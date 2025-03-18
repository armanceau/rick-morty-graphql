import { Link } from "react-router";
import "./card.css";

interface CardProps {
  name: string;
  image: string;
  id: string;
}

const Card = ({ name, image, id }: CardProps) => {
  return (
    <div className="card">
      <img src={image ?? ""} className="card-img" alt={name} />
      <div>{name}</div>
      <div>
        <Link to={id!} key={id}>
          Info
        </Link>
      </div>
    </div>
  );
};

export default Card;
