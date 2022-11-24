import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/Header'
import Experience from './components/Experience/Experience';
import Nav from './components/Nav/Nav';
import Service from './components/Service/Service';
import Portifolio from './components/portfolio/Portifolio';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/about/About'
import Skill from './components/Skills/Skill';
const App = ()=> {
  return (
    <div>
   <Header/>
   <Nav/>
   <About/>
   <Skill/>
<Experience/>
   <Service/>
   <Portifolio/>
   <Testimonial/>
   <Contact/>
   <Footer/>
   </div>
  );
}

export default App;
