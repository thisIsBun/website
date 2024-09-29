import MainContainer from "./components/containers/MainContainer.style";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MainContainer style={{ marginTop: "var(--nav-height)" }}>
        <Hero />
        <About />
        <Experiences />
        <Contact />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
