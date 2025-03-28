import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Landing from "./screens/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddTicket } from "./screens/AddTicket";
import { TicketPage } from "./screens/TicketPage";
import { Lists } from "./screens/Lists";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={<Signup />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/tickets/add" element={<AddTicket />} />
        <Route path="/list" element={<Lists />} />
        <Route path="/ticket/:Id" element={<TicketPage />} />
        <Route path="/tickets" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
