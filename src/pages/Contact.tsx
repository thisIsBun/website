import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import FlexColumn from '../components/containers/FlexColumn.style';
import SectionContainer from '../components/containers/SectionContainer.style';
import TitleH2 from '../components/fonts/TitleH2.style';
import { Paragraph } from '../components/fonts/P.style';
import emailIcon from '../assets/email_icon.svg';
import phoneIcon from '../assets/phone_icon.svg';
import locationIcon from '../assets/location_icon.svg';
import contactData from '../data/contact.data';
import { ContactButton } from '../components/others/Button.style';
import styled from 'styled-components';
import useToast from '../utils/toast/useToast';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import Loader from '../components/others/Loader.style';
import { useTranslation } from 'react-i18next';

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

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: var(--fz-md);
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
  gap: 5px;
`;

const Input = styled.input`
  background-color: transparent;
  font-size: var(--fz-sm);
  padding: 12px 15px;
  border: 1px solid hsla(0, 0%, 100%, 0.5);
  line-height: 1.6;
  color: var(--primary-font);
  font-family: var(--font-mono);
  margin-bottom: 10px;
  border-radius: 0;

  &:-webkit-autofill,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover {
    -webkit-box-shadow: 0 0 0 1000px var(--primary-background) inset;
    box-shadow: inset 0 0 0 1000px var(--primary-background);
    -webkit-transition: background-color 5000s ease-in-out 0s;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--primary-font);
  }

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background-color: transparent;
  font-size: var(--fz-sm);
  padding: 12px 15px;
  border: 1px solid hsla(0, 0%, 100%, 0.5);
  color: var(--primary-font);
  margin-bottom: 10px;
  border-radius: 0;

  &:focus {
    outline: none;
  }
`;

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { t } = useTranslation('contact');
  const [isIntersecting, elementRef] = useIntersectionObserver();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('access_key', import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        form.reset();
        toast.open('Message send to Bun 🎉');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        toast.open('Oops..try later 🥺');
      }
    } catch (error) {
      console.error('Error: ', error);
      toast.open('Oops..try later 🥺');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionContainer
      id='contact'
      ref={elementRef}
      className={isIntersecting ? 'loaded' : undefined}
    >
      <TitleH2>{t('title')}</TitleH2>
      <ContactWrapper>
        <ContactDetail>
          <Paragraph>{t('description')}</Paragraph>
          <FlexColumn $gap='8px'>
            <IconWrapper>
              <Img src={emailIcon} alt={t('alt.email')} />
              <Paragraph>{contactData.email}</Paragraph>
            </IconWrapper>
            <IconWrapper>
              <Img src={phoneIcon} alt={t('alt.phone')} />
              <Paragraph>{contactData.phone}</Paragraph>
            </IconWrapper>
            <IconWrapper>
              <Img src={locationIcon} alt={t('alt.location')} />
              <Paragraph>{t(contactData.location)}</Paragraph>
            </IconWrapper>
          </FlexColumn>
        </ContactDetail>
        <ContactForm onSubmit={onSubmit}>
          <Input
            name='name'
            type='text'
            id='name'
            onChange={handleChange}
            aria-label={t('ariaLabel.name')}
            placeholder={t('contact.name')}
          />
          <Input
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
            aria-label={t('ariaLabel.email')}
            placeholder={t('contact.email')}
          />
          <TextArea
            name='message'
            id='message'
            rows={8}
            onChange={handleChange}
            aria-label={t('ariaLabel.message')}
            placeholder={t('contact.message')}
          ></TextArea>
          <ContactButton
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.message ||
              isLoading
            }
          >
            {isLoading ? <Loader /> : t('sendOut')}
          </ContactButton>
        </ContactForm>
      </ContactWrapper>
    </SectionContainer>
  );
};

export default Contact;
