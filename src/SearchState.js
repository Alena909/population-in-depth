import { useState, useEffect } from "react";

import DisplayState from "./DisplayState";

const YEARS = [2013, 2014, 2015, 2016, 2017, 2018, 2019];
const INITIALYEAR = 2019;

const Search = () => {
  const [year, setYear] = useState("latest");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getStatePopulation();
  }, []);

  async function getStatePopulation() {
    const res = await fetch(
      `https://datausa.io/api/data?drilldowns=State&measures=Population&year=${year}`
    );
    const json = await res.json();

    setResults(json.data);
    setYear("");
  }

  return (
    <div className="search-info">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          getStatePopulation();
        }}
      >
        <label htmlFor="year">
          Year:{" "}
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option />
            {YEARS.map((curYear, i) => (
              <option key={i} value={curYear}>
                {curYear}
              </option>
            ))}
          </select>
        </label>
        <button className="total-population">Get Population</button>
      </form>
      <h2>{INITIALYEAR}</h2>
      <DisplayState results={results} />
    </div>
  );
};
export default Search;
