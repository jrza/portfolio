import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import "./globals.css";

export default function Home(){
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Services />
    <Footer />
    </>
  )
}