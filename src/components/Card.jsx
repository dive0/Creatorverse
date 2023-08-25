import { Link } from "react-router-dom";
import { FaLink, FaEdit } from "react-icons/fa";

const Card = (props) => {
  const { creator } = props;

  return (
    <div className="w-5/12 bg-blue-800 my-3">
      <div className="relative">
        {creator.imageURL && creator.imageURL.length != 0 ? (
          <img
            src={creator.imageURL}
            alt="Creator Image"
            className="block h-36 w-36 m-auto py-1"
          />
        ) : (
          <img
            src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
            alt="White Background"
            className="block h-36 w-36 m-auto py-1"
          />
        )}
        <Link to={`/${creator.id}/edit`} className="absolute top-1 right-1">
          <FaEdit className="hover:fill-blue-400"/>
        </Link>
      </div>

      <div className="p-2 space-y-3">
        <Link to={`/${creator.id}`}>
          <p className="hover:text-blue-400 hover:underline">{creator.name}</p>
        </Link>
        <a href={creator.url}>
          <FaLink className="inline-block hover:fill-blue-400" />
        </a>
        <p className="break-words">{creator.description}</p>
      </div>
    </div>
  );
};

export default Card;
