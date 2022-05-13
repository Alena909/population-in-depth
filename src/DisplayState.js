const DisplayState = ({ results }) => {
  const data = results.map((result, i) => {
    return (
      <div key={i}>
        <h2>{result.State}</h2>
        <p>{result.Population}</p>
        <hr />
      </div>
    );
  });
  return <div>{data}</div>;
};
export default DisplayState;
