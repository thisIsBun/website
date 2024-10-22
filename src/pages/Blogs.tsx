import React from 'react';
import SectionContainer from '../components/containers/SectionContainer.style';
import TitleH2 from '../components/fonts/TitleH2.style';
import blogsData from '../data/blogs.data';
import FlexColumn from '../components/containers/FlexColumn.style';
import Heading4 from '../components/fonts/Heading4.style';
import { AboutP } from '../components/fonts/P.style';
import { ImArrowUpRight2 } from 'react-icons/im';
import Anchor from '../components/others/Anchor.style';
import FlexRow from '../components/containers/FlexRow.style';
import styled from 'styled-components';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const CardWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 30px;
  border-radius: 8px;
  flex-direction: column;

  &:hover {
    background-color: var(--light-navy);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 576px) {
    padding: 10px;
    gap: 8px;
    .arrowIcon {
      display: none;
    }
  }
`;

const convertDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const Blogs = () => {
  const [isIntersecting, elementRef] = useIntersectionObserver();

  return (
    <SectionContainer
      id='blogs'
      ref={elementRef}
      className={isIntersecting ? 'loaded' : undefined}
    >
      <TitleH2 $number={3}>Things I’ve Written</TitleH2>
      <FlexColumn $gap='20px'>
        {blogsData.map(({ postId, post }) => {
          const {
            title,
            previewContent: { subtitle },
            firstPublishedAt,
            readingTime,
            mediumUrl,
          } = post;
          return (
            <CardWrapper key={postId}>
              <Anchor
                to={mediumUrl}
                target
              >
                <FlexRow>
                  <Heading4>{title}</Heading4>
                  <ImArrowUpRight2 className='arrowIcon' />
                </FlexRow>
              </Anchor>
              <AboutP>{subtitle}</AboutP>
              <AboutP>
                Published on {convertDate(firstPublishedAt)} · {Math.round(readingTime)} min read
              </AboutP>
            </CardWrapper>
          );
        })}
      </FlexColumn>
    </SectionContainer>
  );
};

export default Blogs;
