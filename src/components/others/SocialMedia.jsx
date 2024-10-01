import socialMediaData from "../../data/socialMedia.data";
import { IconWrapper } from "../Hero.style";
import Anchor from "./Link.style";

const SocialMedia = () => {
  return (
    <IconWrapper>
      {socialMediaData.map(({ path, element }, index) => {
        return (
          <Anchor to={path} key={index} target="_blank">
            {element}
          </Anchor>
        );
      })}
    </IconWrapper>
  );
};

export default SocialMedia;
