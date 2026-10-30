import { FormEvent, useState, ChangeEvent } from 'react'
import styled from 'styled-components'

/* eslint-disable @typescript-eslint/no-explicit-any */
const FormStyled = styled.form<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: var(--cor-secundaria);
  margin-top: 40px;
  border-radius: 8px;
`

const InputStyled = styled.input<any>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  height: 40px;
  width: 630px;
  border: 1px solid var(--cor-principal);
  font-size: 16px;
  border-radius: 8px 0 0 8px;
`

const ButtonStyled = styled.button<any>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 0 8px 8px 0;

  &:hover {
    filter: brightness(0.9);
  }
`

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyled onSubmit={aoEnviarForm}>
      <InputStyled
        placeholder="Front-end, fullstack, stem, etc."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <ButtonStyled type="submit">Pesquisar</ButtonStyled>
    </FormStyled>
  )
}

export default FormVagas
