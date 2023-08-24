import { Link } from "react-router-dom";
import { FaLink, FaEdit } from "react-icons/fa";

const Card = (props) => {
  const { creator } = props;

  return (
    <div className="w-3/12 bg-blue-800">
      <div className="relative">
        {creator.imageURL && creator.imageURL.length != 0 ? (
          <img
            src={creator.imageURL}
            alt="Creator Image"
            width="100%"
            className="block"
          />
        ) : (
          <img
            src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
            alt="White Background"
            width="100%"
            className="block"
          />
        )}
        <Link to={`/${creator.id}/edit`} className="absolute top-1 right-1">
          <FaEdit className="fill-blue-800" />
        </Link>
      </div>

      <div className="p-2 space-y-3">
        <Link to={`/${creator.id}`}>
          <p>{creator.name}</p>
        </Link>
        <a href={creator.url}>
          <FaLink className="inline-block" />
        </a>
        <p className="break-words">{creator.description}</p>
      </div>
    </div>
  );
};

export default Card;
