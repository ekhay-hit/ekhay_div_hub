import "./styles/App.css";
import { Fragment } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
