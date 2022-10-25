import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Home/Home';
import Skills from './components/Skills/Skills';
import Project from "./components/Project/Project"
import Contact from "./components/Contact/Contact"
function App() {
  return (
    <div fluid className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
