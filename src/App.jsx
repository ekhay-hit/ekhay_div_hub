import "./styles/App.css";
import { Fragment } from "react";
import Nav from "./components/nav.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Fragment className="root">
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
