import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  ${({ $justifyContentCenter }) =>
    $justifyContentCenter && `justify-content: center;`}
  margin-top: ${({ $marginTop }) => $marginTop}
`;

export default MainContainer;
