import { VagaContainer, VagaLink, VagaTitulo } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const moeda = (valor: number) =>
  valor.toLocaleString('pt-BR', { minimumFractionDigits: 0 })

const Vaga = (props: Props) => (
  <VagaContainer>
    <div>
      <VagaTitulo>{props.titulo}</VagaTitulo>
      <p>Localização: {props.localizacao}</p>
      <p>Senioridade: {props.nivel}</p>
      <p>Tipo de vaga: {props.modalidade}</p>
      <p>
        Salário: R$ {moeda(props.salarioMin)} - {moeda(props.salarioMax)}
      </p>
      <ul>
        {props.requisitos.map((requisito) => (
          <li key={requisito}>{requisito}</li>
        ))}
      </ul>
    </div>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga
