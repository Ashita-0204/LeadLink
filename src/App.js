import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashboard";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
