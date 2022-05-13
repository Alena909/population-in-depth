import Choice from "./Choice";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Population of Our Nation</h1>
      <div className="home-links">
        <Link to="/nation">
          <Choice name="Nations Population" />
        </Link>
        <Link to="/state">
          <Choice name="State Population" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
