import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Techniques from "@/components/Techniques";
import VideoReel from "@/components/VideoReel";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <SelectedWork />
        <VideoReel />
        <Techniques />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
