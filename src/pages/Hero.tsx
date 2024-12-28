import { useEffect, useState } from 'react';
import SectionContainer from '../components/containers/SectionContainer.style';
import Heading2 from '../components/fonts/Heading2.style';
import { HeroP } from '../components/fonts/P.style';
import SocialMedia from '../components/others/SocialMedia.style';
import styled from 'styled-components';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { GoSquareFill } from 'react-icons/go';
import FlexRow from '../components/containers/FlexRow.style';
import { useTranslation } from 'react-i18next';

const HeroH1 = styled.h1`
  margin: 0;
  color: var(--primary-font);
  font-size: 78px;
  line-height: 0.8;

  @media (max-width: 1200px) {
    font-size: 72px;
  }

  @media (max-width: 992px) {
    font-size: 62px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 576px) {
    font-size: 42px;
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
  background-color: var(--header-background);
  cursor: pointer;
  border: none;
  border-radius: 50%;

  svg {
    color: var(--accent-color);
    font-size: 24px;
    transition: transform 0.2s ease-in-out;
  }

  .uttering {
    cursor: wait;
  }

  &:hover {
    border: 1px solid var(--accent-color);
  }

  &:hover svg {
    color: var(--accent-color);
    transform: scale(1.05);
  }
`;

const Hero = () => {
  const { t } = useTranslation('hero');
  const [utterVoice, setUtterVoice] = useState<SpeechSynthesisVoice | null>(
    null
  );
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
        const maleVoice = voices.find((voice) =>
          voice.name.includes('Google UK English Male')
        );
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
          <IconButton onClick={handleUtterance} aria-label={t('pronounce')}>
            {isUttering ? (
              <GoSquareFill className='uttering' />
            ) : (
              <HiOutlineSpeakerWave />
            )}
          </IconButton>
        </FlexRow>
        <Heading2>{t('subject')}</Heading2>
        <HeroP>{t('content')}</HeroP>
        <SocialMedia />
      </HeroWrapper>
    </SectionContainer>
  );
};

export default Hero;
