import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UeberUns from "./pages/UeberUns.jsx";
import Dienstleistungen from "./pages/Dienstleistungen.jsx";
import Projekte from "./pages/Projekte.jsx";
import FuerUnternehmen from "./pages/FuerUnternehmen.jsx";
import Ressourcen from "./pages/Ressourcen.jsx";
import Kontakt from "./pages/Kontakt.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/dienstleistungen" element={<Dienstleistungen />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/fuer-unternehmen" element={<FuerUnternehmen />} />
        <Route path="/ressourcen" element={<Ressourcen />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;
