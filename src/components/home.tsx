import Navbar from "./Navbar";
import Hero from "./Hero";
import StatsBar from "./StatsBar";
import About from "./About";
import Benefits from "./Benefits";
import FeaturedWork from "./FeaturedWork";
import ValueProposition from "./ValueProposition";
import FooterCTA from "./FooterCTA";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-navy via-dark-navy to-deep-navy">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Benefits />
      <FeaturedWork />
      <ValueProposition />
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default Home;
