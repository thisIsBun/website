import styled from 'styled-components';

const TitleH2 = styled.h2`
  display: flex;
  align-items: flex-end;
  font-size: 32px;
  font-weight: 600;
  color: var(--accent-color);
  width: 100%;
  margin-top: var(--nav-height-desktop);
  margin-bottom: 40px;

  &::after {
    content: '';
    display: block;
    position: relative;
    width: 300px;
    height: .8px;
    margin: 20px;
    background-color: var(--accent-color);
  }

  @media (max-width: 1200px) {
    font-size: 30px;
    margin-bottom: 35px;
  }

  @media (max-width: 992px) {
    font-size: 28px;
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    &::after {
      content: none;
    }
  }

  @media (max-width: 576px) {
    font-size: 26px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export default TitleH2;
