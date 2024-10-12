import socialMediaData from "../../data/socialMedia.data";
import Anchor from "./Anchor.style";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: var(--fz-xxl);

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 5vw;
  }
`;

const SocialMedia = () => {
  return (
    <IconWrapper>
      {socialMediaData.map(({ path, element }, index) => {
        return (
          <Anchor to={path} key={index} target>
            {element}
          </Anchor>
        );
      })}
    </IconWrapper>
  );
};

export default SocialMedia;
