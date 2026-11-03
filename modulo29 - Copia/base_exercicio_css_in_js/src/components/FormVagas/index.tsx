import { ChangeEvent, FormEvent, useState } from 'react'
import { BotaoPesquisar, Campo, Form } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    aoPesquisar(termo.trim().toLocaleLowerCase())
  }

  const aoAlterarCampo = (evento: ChangeEvent<HTMLInputElement>) => {
    setTermo(evento.target.value)
  }

  return (
    <Form onSubmit={aoEnviarForm} role="search">
      <Campo
        type="search"
        value={termo}
        onChange={aoAlterarCampo}
        placeholder="Front-end, fullstack, stem, etc."
        aria-label="Pesquisar vagas"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Form>
  )
}

export default FormVagas
