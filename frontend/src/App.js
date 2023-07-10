import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Home from "./components/Home/Home.jsx";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
