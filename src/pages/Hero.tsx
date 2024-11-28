import { useEffect, useState } from 'react';
import SectionContainer from '../components/containers/SectionContainer.style';
import Heading3 from '../components/fonts/Heading2.style';
import { HeroP } from '../components/fonts/P.style';
import SocialMedia from '../components/others/SocialMedia.style';
import styled from 'styled-components';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { GoSquareFill } from 'react-icons/go';
import FlexRow from '../components/containers/FlexRow.style';

const HeroH1 = styled.h1`
  margin: 0;
  color: var(--lightest-slate);
  font-size: 80px;
  line-height: 0.8;

  @media (max-width: 1200px) {
    font-size: 74px;
  }

  @media (max-width: 992px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 56px;
  }

  @media (max-width: 576px) {
    font-size: 48px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  gap: 2rem;

  @media (max-width: 992px) {
    gap: 1.8rem;
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    gap: 1.6rem;
    padding: 0;
  }

  @media (max-width: 576px) {
    gap: 1.4rem;
    div a {
      font-size: 32px;
    }
  }
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-radius: 50%;

  svg {
    color: var(--lightest-slate);
    font-size: 24px;
    transition: transform 0.2s ease-in-out;
  }

  .uttering {
    cursor: wait;
  }

  &:hover {
    background-color: var(--slate);
  }

  &:hover svg {
    color: var(--green);
    transform: scale(1.05);
  }
`;

const Hero = () => {
  const [utterVoice, setUtterVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isUttering, setIsUttering] = useState<boolean>(false);
  const [isIntersecting, elementRef] = useIntersectionObserver();

  const handleUtterance = () => {
    if (speechSynthesis.speaking) return;
    const text = 'bun';
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'en-GB';
    utterance.rate = 0.9;
    utterance.pitch = 0.9;

    if (utterVoice) {
      utterance.voice = utterVoice;
    }

    utterance.onstart = () => {
      setIsUttering(true);
    };

    utterance.onend = () => {
      setIsUttering(false);
    };

    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const loadVoice = () => {
      const voices = speechSynthesis.getVoices();
      if (voices.length) {
        const maleVoice = voices.find((voice) => voice.name.includes('Google UK English Male'));
        setUtterVoice(maleVoice || null);
      } else {
        setTimeout(loadVoice, 100);
      }
    };
    loadVoice();
    speechSynthesis.onvoiceschanged = loadVoice;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  return (
    <SectionContainer
      style={{ height: '100vh', margin: '0', justifyContent: 'center' }}
      ref={elementRef}
      className={isIntersecting ? 'loaded' : undefined}
    >
      <HeroWrapper>
        <FlexRow $gap='1rem'>
          <HeroH1>Bun</HeroH1>
          <IconButton
            onClick={handleUtterance}
            aria-label='listen pronunciation for bun '
          >
            {isUttering ? <GoSquareFill className='uttering' /> : <HiOutlineSpeakerWave />}
          </IconButton>
        </FlexRow>
        <Heading3>Front-End Developer</Heading3>
        <HeroP>I enjoy crafting things on the web.</HeroP>
        <SocialMedia />
      </HeroWrapper>
    </SectionContainer>
  );
};

export default Hero;
