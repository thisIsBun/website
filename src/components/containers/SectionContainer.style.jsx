import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "80px"};
  width: 100%;
  max-width: 1000px;
  align-items: ${({ $alignItemsCenter }) =>
    $alignItemsCenter ? "center" : "stretch"};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};

  @media (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (max-width: 992px) {
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px 4vw;
  }
`;

export default SectionContainer;
