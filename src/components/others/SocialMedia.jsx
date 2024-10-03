import socialMediaData from "../../data/socialMedia.data";
import Anchor from "./Anchor.style";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 15px;
  font-size: var(--fz-xxl);
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
