import Home from "./screens/Home";
import Signup from "./screens/Signup";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/dashboard" element={<dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
