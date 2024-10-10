import { useRouteError } from "react-router-dom";
import MainContainer from "../components/containers/MainContainer.style";
import { AboutP } from "../components/fonts/P.style";
import Heading2 from "../components/fonts/Heading2.style";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <MainContainer $justifyContentCenter height="100vh" gap="0">
      <Heading2 $marginBottom="20px">Oops..</Heading2>
      <AboutP>Sorry, an unexpected error has occurred.</AboutP>
      <AboutP>{error.statusText || error.message}</AboutP>
    </MainContainer>
  );
};

export default ErrorPage;
