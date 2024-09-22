import MainContainer from "./components/containers/MainContainer.style";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Hero />
        <About />
      </MainContainer>
    </>
  );
};

export default App;
