import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height || "auto"};
  ${({ $justifyContentCenter }) =>
    $justifyContentCenter && `justify-content: center;`}
  padding: 0 50px;
  gap: ${({ gap }) => gap || "60px"};

  @media (max-width: 1200px) {
    padding: 0 60px;
    gap: 50px;
  }

  @media (max-width: 992px) {
    padding: 0 30px;
    gap: 25px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default MainContainer;
