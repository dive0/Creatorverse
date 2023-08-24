import Card from "../components/Card";

const ShowCreators = (props) => {
  const {creators} = props;

  return (
    <div className="text-white text-2xl my-3">
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