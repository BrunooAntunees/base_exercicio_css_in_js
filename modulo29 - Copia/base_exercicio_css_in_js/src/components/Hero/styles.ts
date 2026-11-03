import styled from 'styled-components'

export const HeroSection = styled.section`
  min-height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  isolation: isolate;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/43/jobs-3597159_1280.jpg');
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: rgba(167, 114, 125, 0.76);
  }

  @media (max-width: 768px) {
    min-height: 240px;
  }
`

export const HeroTitle = styled.h2`
  max-width: 760px;
  color: #fff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.2;
  font-weight: 700;
  padding: 24px 0;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`
