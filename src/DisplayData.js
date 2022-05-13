const DisplayData = ({ results }) => {
  const { Nation, Year, Population } = results;
  let newNum;
  if (Population) {
    newNum = Population.toLocaleString("en-US");
  } else {
    return;
  }
  return (
    <div className="display-data">
      <h2>{Nation}</h2>
      <h3>{Year}</h3>
      <h3>{newNum}</h3>
    </div>
  );
};

export default DisplayData;
