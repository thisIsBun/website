import {
  ContactWrapper,
  ContactDetail,
  IconWrapper,
  Img,
  ContactForm,
  Label,
  Input,
  TextArea,
} from "../components/Contact.style";
import FlexColumn from "../components/containers/FlexColumn.style";
import SectionContainer from "../components/containers/SectionContainer.style";
import TitleH2 from "../components/fonts/TitleH2.style";
import { AboutP } from "../components/fonts/P.style";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import locationIcon from "../assets/location_icon.svg";
import contactData from "../data/contact.data";
import { ContactButton } from "../components/others/Button.style";

const Contact = () => {
  return (
    <SectionContainer id="contact">
      <TitleH2 $number="4">Get In Touch</TitleH2>
      <ContactWrapper>
        <ContactDetail>
          <AboutP>
            It’s always nice to meet new friends 👋 <br />
            So feel free to send me a message anytime, I will get back to you.
          </AboutP>
          <FlexColumn $gap="16px">
            <IconWrapper>
              <Img src={emailIcon} alt="emailIcon" />
              <AboutP>{contactData.email}</AboutP>
            </IconWrapper>
            <IconWrapper>
              <Img src={phoneIcon} alt="phoneIcon" />
              <AboutP>{contactData.phone}</AboutP>
            </IconWrapper>
            <IconWrapper>
              <Img src={locationIcon} alt="locationIcon" />
              <AboutP>{contactData.location}</AboutP>
            </IconWrapper>
          </FlexColumn>
        </ContactDetail>
        <ContactForm>
          <Label htmlFor="name">Your name</Label>
          <Input type="text" id="name" />
          <Label htmlFor="email">Your email</Label>
          <Input type="email" id="email" />
          <Label htmlFor="message">Write your message here</Label>
          <TextArea id="message" rows="8"></TextArea>
          <ContactButton>Send out</ContactButton>
        </ContactForm>
      </ContactWrapper>
    </SectionContainer>
  );
};

export default Contact;
