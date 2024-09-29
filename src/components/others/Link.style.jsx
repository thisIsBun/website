import styled from "styled-components";
import { Link } from "react-router-dom";

const Anchor = styled(Link)`
  text-decoration: none;
  color: rgb(204, 214, 246);

  &:hover {
    color: var(--green);
  }
`;

export default Anchor;
