import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  gap: ${({ $gap }) => $gap || "20px"};
  padding: 30px;
  border-radius: 8px;
  flex-direction: ${({ $column }) => ($column ? "column" : "row")};

  &:hover {
    background-color: var(--light-navy);
  }
`;

export default CardWrapper;
