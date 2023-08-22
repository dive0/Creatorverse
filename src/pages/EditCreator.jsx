import { useState } from "react";
import { supabase } from "./../client";
import { useParams } from "react-router-dom";

import Form from "../components/Form";

const EditCreator = (props) => {
  const { creators } = props;

  const [name, setName] = useState();
  const [url, setURL] = useState();
  const [description, setDescription] = useState();
  const [imageURL, setImageURL] = useState();

  const { id } = useParams();
  const creator = creators.filter((item) => item.id == id)[0];

  const updateInfo = async (e) => {
    e.preventDefault();

    await supabase
      .from("Creator")
      .update({
        name: name,
        description: description,
        url: url,
        imageURL: imageURL,
      })
      .eq("id", id);

    alert("Success");
    window.location = "/";
  };

  const deleteCreator = async (e) => {
    e.preventDefault();

    await supabase.from("Creator").delete().eq("id", id);

    alert("Success");
    window.location = "/";
  };

  return (
    <div>
      <h1>Update Creator</h1>
      <form>
        <Form
          name={creator.name}
          url={creator.url}
          description={creator.description}
          imageURL={creator.imageURL}
          setName={setName}
          setDescription={setDescription}
          setURL={setURL}
          setImageURL={setImageURL}
        />
      </form>

      <button onClick={updateInfo}>Update Information</button>

      <button onClick={deleteCreator}>Delete Creator</button>
    </div>
  );
};

export default EditCreator;
