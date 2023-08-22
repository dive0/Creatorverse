import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewCreator = (props) => {
  const { creators } = props;

  const { id } = useParams();
  const creator = creators.filter((item) => item.id == id)[0];

  return (
    <div>
      <h1>Creator: {creator.name}</h1>
      <p>URL: {creator.url}</p>
      <p>Description: {creator.description}</p>
      {creator.imageURL != "" ? (
        <img src={creator.imageURL} alt="image" />
      ) : (<div></div>)}

      <Link to={`/${creator.id}/edit`}>
        <button>Edit Creator</button>
      </Link>
    </div>
  )
};

export default ViewCreator;
