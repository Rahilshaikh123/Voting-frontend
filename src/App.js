import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import "./css/App.css";
import { AuthContext } from "./hook/authContext";
import { useState } from "react";
import Vote from "./pages/Vote";
import Navbar from "./components/Navbars";
import Admin from "./pages/Admin";

function App() {
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState({
    name: "",
    role: "",
    userId: "",
  });
  const login = (userdetail) => {
    setUser(userdetail);
    setIslogin(true);
  };
  const logout = () => {
    setUser({
      name: "",
      role: "",
      userId: "",
    });
    setIslogin(false);
  };
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedin: isLogin,
          name: user.name,
          role: user.role,
          userId: user.userId,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/vote" element={<Vote />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
