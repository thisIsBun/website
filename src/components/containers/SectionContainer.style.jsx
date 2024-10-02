import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 180px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 1000px;
  align-items: ${({ $alignItemsCenter }) =>
    $alignItemsCenter ? "center" : "stretch"};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
`;

export default SectionContainer;
