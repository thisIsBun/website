import MainContainer from "./components/containers/MainContainer.style";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Hero />
      </MainContainer>
    </>
  );
};

export default App;
