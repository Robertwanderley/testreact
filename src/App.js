import './App.css';
import Tick from './components/data';
import Footer from './components/footer';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from './pages/contato';
import Headers from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Footer ano={2022} Marca={"@Aratangi"} />
      <Tick />
    </div>
  );
}

export default App;
