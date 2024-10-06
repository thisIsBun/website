import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height || "auto"};
  ${({ $justifyContentCenter }) =>
    $justifyContentCenter && `justify-content: center;`}
  margin-top: ${({ $marginTop }) => $marginTop};
  padding: 0 50px;
  gap: 60px;
`;

export default MainContainer;
