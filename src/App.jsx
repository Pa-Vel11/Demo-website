import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./components/pages/Products";
import { Services } from "./components/pages/Services";
import { SignUp } from "./components/pages/SignUp";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serwis" element={<Services />} />
          <Route path="/produkty" element={<Products />} />
          <Route path="/zaloguj-sie" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
