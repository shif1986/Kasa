

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from '../pages/About';
import FicheLogement from '../pages/FicheLogement';
import Home from '../pages/Home';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='a-propos' element={<About />} />
        <Route path='fiche-logement/:id' element={<FicheLogement/>}/>
      </Routes>

    </Router>
  );
}




export default App;
