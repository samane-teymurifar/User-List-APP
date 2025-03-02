import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import HomePage from "./pages/home";
import PrivateRoute from "./auth/PrivateRoute";
import UserDetail from "./components/user-detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
