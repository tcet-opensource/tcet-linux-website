import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Body from "./components/Body";


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Body/>
      <Cards/>{/*<Image/> when images are ready*/}
      <Footer/>
    </div>
  );
}

export default App;
