import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Exploring";
import "./globals.css";
import BurgerMenu from "@/components/menu/BurgerMenu";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";

export default function Home(){
  return (
    <GlobalStateProvider>
      <Navbar />
      <BurgerMenu/>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>
  );
}