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

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        defaultValue={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="text-white p-1"
      />

      <label htmlFor="imageURL">ImageURL:</label>
      <input
        type="text"
        id="imageURL"
        name="imageURL"
        defaultValue={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        className="text-white p-1"
      />
    </>
  );
};

export default Form;
