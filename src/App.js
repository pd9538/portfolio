import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Qualification from './components/qualification';
import Skills from './components/skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About name="Kate Winslet"
        birthday="1 April 1990"
        degree="Master"
        phone="+012 345 6789"
        email="info@example.com"
        address="123 Street, New York, USA"
        freelance="Available" />
      <Qualification/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
