import "./card.css";

interface CardProps {
  name: string;
  image: string;
}

const Card = ({ name, image }: CardProps) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <h3>{name}</h3>
      <a href="">Info</a>
    </div>
  );
};

export default Card;
