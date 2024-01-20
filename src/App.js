import Login from "./components/Login";
import HomePage from "./components/HomePage";
import FootballPage from "./components/FootballPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketballPage from "./components/basketballPage";
import VolleyballPage from "./components/VolleyballPage";
import TennisPage from "./components/TennisPage";
import Events from "./components/Events";
import ContactPage from "./components/Contact";
import Cafeteria from "./components/Cafeteria";
import Store from "./components/Store";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import { getUserRole } from "./UserInfo/GetUserInfo";
import AdminDash from "./components/AdminDash";
import UserDash from "./components/UserDash";

function App() {
  const role = getUserRole();
  return (
    <BrowserRouter>
      <Toaster toastOptions={{ duration: 5000 }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<Login />} />
        <Route path="/football" element={<FootballPage />} />
        <Route path="/basketball" element={<BasketballPage />} />
        <Route path="/volleyball" element={<VolleyballPage />} />
        <Route path="/tennis" element={<TennisPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cafeteria" element={<Cafeteria />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/user" element={<UserDash />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
