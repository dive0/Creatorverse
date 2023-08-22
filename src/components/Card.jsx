import { Link } from "react-router-dom";

const Card = (props) => {
  const { creator } = props;

  return (
    <div>
      <Link to={`/${creator.id}`}>
        <div>
          <img src={creator.imageURL} alt="Creator Image" />
          <p>{creator.name}</p>
          <p>{creator.url}</p>
          <p>{creator.description}</p>
        </div>
      </Link>

      <button>
        <Link to={`/${creator.id}/edit`}>Edit Creator</Link>
      </button>
    </div>
  );
};

export default Card;
