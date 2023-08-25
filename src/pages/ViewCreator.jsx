import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewCreator = (props) => {
  const { creators } = props;

  const { id } = useParams();
  const creator = creators.filter((item) => item.id == id)[0];

  return (
    <div className="flex items-center flex-col text-2xl text-white space-y-3">
      {creator.imageURL && creator.imageURL.length != 0 ? (
        <img src={creator.imageURL} alt="image" className="h-52 w-52 rounded-lg"/>
      ) : (
        <img
          src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
          alt="White Background"
          className="h-52 w-52 rounded-lg"
        />
      )}

      <h1>Creator: {creator.name}</h1>
      <p>URL: {creator.url}</p>
      <p>Description: {creator.description}</p>

      <Link to={`/${creator.id}/edit`}>
        <button className="bg-blue-500 text-lg p-1 rounded hover:bg-blue-300 transition text-black my-5">Edit Creator</button>
      </Link>
    </div>
  );
};

export default ViewCreator;
