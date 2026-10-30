import styled from 'styled-components'

/* eslint-disable @typescript-eslint/no-explicit-any */
const FormStyled = styled.form<any>`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/43/jobs-3597159_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }
`

const ContainerStyled = styled.div<any>`
  position: relative;
  color: #eee;
`

const HeroTitle = styled.h2<any>`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Hero = () => (
  <FormStyled>
    <ContainerStyled className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </ContainerStyled>
  </FormStyled>
)

export default Hero
