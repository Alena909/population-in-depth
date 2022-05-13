import Footer from "./Footer";
import { Routes, Route, Link } from "react-router-dom";

import Nation from "./Nation";
import State from "./State";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nation" element={<Nation />} />
        <Route path="/state" element={<State />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
