const Form = (props) => {
  const { name, url, description, imageURL, setName, setDescription, setURL, setImageURL } = props;

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="text-white p-1"
      />
      <br />

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        id="url"
        name="url"
        defaultValue={url}
        onChange={(e) => setURL(e.target.value)}
        required
        className="text-white p-1"
      />
      <br />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        rows="3" cols="25"
        defaultValue={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="text-white p-1"
      />
      <br />

      <label htmlFor="imageURL">ImageURL:</label>
      <input
        type="text"
        id="imageURL"
        name="imageURL"
        defaultValue={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        className="text-white p-1"
      />
      <br />
    </>
  );
};

export default Form;
