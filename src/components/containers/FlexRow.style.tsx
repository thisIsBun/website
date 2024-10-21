import styled from "styled-components";
import { CSSProperties } from "react";

type FlowRowProps = {
  $gap?: CSSProperties["gap"];
  $margin?: CSSProperties["margin"];
};

const FlexRow = styled.div<FlowRowProps>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap || "10px"};
  margin: ${({ $margin }) => $margin || "0px"};
`;

export default FlexRow;
