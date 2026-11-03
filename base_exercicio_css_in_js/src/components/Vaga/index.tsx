import styled from 'styled-components'

/* eslint-disable @typescript-eslint/no-explicit-any */
const VagaStyled = styled.li<any>`
  background-color: var(--cor-secundaria);
  border: 1px solid var(--cor-principal);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

const VagaTitulo = styled.h3<any>`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaLink = styled.a<any>`
  border-color: var(--cor-principal);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaStyled>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <p>Locais: {props.localizacao}</p>
    <p>Senioridade: {props.nivel}</p>
    <p>Tipo de vaga: {props.modalidade}</p>
    <p>
      Salário: R$ {props.salarioMin} - {props.salarioMax}
    </p>
    <div>
      <ul>
        {props.requisitos.map((requisito, index) => (
          <li key={index}>{requisito}</li>
        ))}
      </ul>
    </div>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaStyled>
)

export default Vaga
