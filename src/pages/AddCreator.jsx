import { useState } from "react";
import { supabase } from "../client";

import Form from "../components/Form";

const AddCreator = () => {
  const [name, setName] = useState();
  const [url, setURL] = useState();
  const [description, setDescription] = useState();
  const [imageURL, setImageURL] = useState();

  const addCreator = async (e) => {
    e.preventDefault();

    await supabase
      .from("Creator")
      .insert({
        name: name,
        description: description,
        url: url,
        imageURL: imageURL,
      })
      .select();

    alert("Success");
    window.location = "/";
  };

  return (
    <div className="form">
      <h1>Add Creator</h1>

      <form>
        <Form
          setName={setName}
          setURL={setURL}
          setDescription={setDescription}
          setImageURL={setImageURL}
        />
      </form>

      <button onClick={addCreator}>Add Creator</button>
    </div>
  );
};

export default AddCreator;
