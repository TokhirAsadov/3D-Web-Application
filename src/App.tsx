import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Experience from "./components/Experience.tsx";
import Tech from "./components/Tech.tsx";
import Works from "./components/Works.tsx";
import Feedbacks from "./components/Feedbacks.tsx";
import Contact from "./components/Contact.tsx";
import StarsCanvas from "./components/StarsCanvas.tsx";

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative  z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App