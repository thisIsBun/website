import { useState } from "react";
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
  const [formDate, setFormDate] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newFormDate = { ...formDate };
    newFormDate[name] = value;
    setFormDate(newFormDate);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Success", result);
      setFormDate({
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
        <ContactForm onSubmit={onSubmit}>
          <Label htmlFor="name">Your name</Label>
          <Input name="name" type="text" id="name" onChange={handleChange} />
          <Label htmlFor="email">Your email</Label>
          <Input name="email" type="email" id="email" onChange={handleChange} />
          <Label htmlFor="message">Write your message here</Label>
          <TextArea
            name="message"
            id="message"
            rows="8"
            onChange={handleChange}
          ></TextArea>
          <ContactButton
            disabled={!formDate.name || !formDate.email || !formDate.message}
          >
            Send out
          </ContactButton>
        </ContactForm>
      </ContactWrapper>
    </SectionContainer>
  );
};

export default Contact;
