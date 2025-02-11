import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./layout/login";
import DashboardLayout from "./pages/Dashboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/*"
          element={<DashboardLayout />}
        />
      </Routes>
    </Router>
  );
}

export default App;
