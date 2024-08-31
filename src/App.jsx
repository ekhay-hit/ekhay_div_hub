import "./styles/App.css";
import Nav from "./components/nav.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
