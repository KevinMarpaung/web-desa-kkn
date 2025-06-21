import Header from "../components/Header";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Services from "../components/Services";
import News from "../components/News";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Profile />
      <Services />
      <News />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
