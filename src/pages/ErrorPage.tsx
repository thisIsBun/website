import { useMemo } from 'react';
import { useRouteError } from 'react-router-dom';
import MainContainer from '../components/containers/MainContainer.style';
import { Paragraph } from '../components/fonts/P.style';
import Heading2 from '../components/fonts/Heading2.style';

const ErrorPage = () => {
  const error = useRouteError();

  const errorMessage = useMemo(() => {
    if (error && typeof error === 'object') {
      if ('statusText' in error) {
        return (error as { statusText?: string }).statusText;
      } else if ('message' in error) {
        return (error as { message?: string }).message;
      }
    }
    return 'Unknown Error';
  }, [error]);

  return (
    <MainContainer
      $justifyContentCenter
      height='100vh'
      gap='0'
    >
      <Heading2 $marginBottom='20px'>Oops..</Heading2>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      <Paragraph>{errorMessage}</Paragraph>
    </MainContainer>
  );
};

export default ErrorPage;
