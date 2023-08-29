import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import FicheLogement from "../pages/FicheLogement";
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
 
      <Footer />
    </Router>
  );
}

export default App;
