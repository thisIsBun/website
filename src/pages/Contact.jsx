import { useState } from "react";
import FlexColumn from "../components/containers/FlexColumn.style";
import SectionContainer from "../components/containers/SectionContainer.style";
import TitleH2 from "../components/fonts/TitleH2.style";
import { AboutP } from "../components/fonts/P.style";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import locationIcon from "../assets/location_icon.svg";
import contactData from "../data/contact.data";
import { ContactButton } from "../components/others/Button.style";
import styled from "styled-components";
import useToast from "../utils/toast/useToast";

const ContactWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 1200px) {
    gap: 28px;
  }

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactDetail = styled.div`
  flex-basis: 40%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-top: 48px;

  @media (max-width: 768px) {
    padding-top: 0px;
    gap: 16px;
  }

  @media (max-width: 576px) {
    .iconContainer {
      gap: 12px;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 24px;
  margin-right: 8px;

  @media (max-width: 992px) {
    margin-right: 16px;
  }

  @media (max-width: 576px) {
    margin-right: 12px;
    width: 20px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Label = styled.label`
  font-size: var(--fz-xl);

  @media (max-width: 576px) {
    font-size: var(--fz-lg);
  }
`;

const Input = styled.input`
  background-color: var(--lightest-navy);
  font-size: var(--fz-lg);
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  height: 54px;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background-color: var(--lightest-navy);
  font-size: var(--fz-lg);
  padding: 15px 20px;
  border: none;
  border-radius: 6px;
  color: var(--lightest-slate);

  &:focus {
    outline: none;
  }
`;

const Loader = styled.span`
  display: block;
  border: 2px solid var(--lightest-slate);
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [formDate, setFormDate] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newFormDate = { ...formDate };
    newFormDate[name] = value;
    setFormDate(newFormDate);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        toast.open("Message send to Bun 🤩");
        setFormDate({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.open("Oops..try later 🥺");
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.open("Oops..try later 🥺");
    } finally {
      setIsLoading(false);
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
          <FlexColumn $gap="16px" className="iconContainer">
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
            disabled={
              !formDate.name ||
              !formDate.email ||
              !formDate.message ||
              isLoading
            }
          >
            {isLoading ? <Loader /> : "Send out"}
          </ContactButton>
        </ContactForm>
      </ContactWrapper>
    </SectionContainer>
  );
};

export default Contact;
