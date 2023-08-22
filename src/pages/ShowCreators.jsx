import Card from "../components/Card";

const ShowCreators = (props) => {
  const {creators} = props;

  return (
    <div>
      {creators && creators.length > 0 ? (
        <div>
          {creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))}
        </div>
      ) : (
        <div>
          <p>There are no creator</p>
        </div>
      )}
    </div>
  )
}

export default ShowCreators