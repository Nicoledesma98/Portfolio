import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Project" element={<Project/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
