import { useRouteError } from "react-router-dom";
import MainContainer from "../components/containers/MainContainer.style";
import { H3 } from "../components/Hero.style";
import { AboutP } from "../components/fonts/P.style";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <MainContainer style={{ justifyContent: "center" }}>
      <H3 style={{ marginBottom: "20px" }}>Oops..</H3>
      <AboutP>Sorry, an unexpected error has occurred.</AboutP>
      <AboutP>{error.statusText || error.message}</AboutP>
    </MainContainer>
  );
};

export default ErrorPage;
