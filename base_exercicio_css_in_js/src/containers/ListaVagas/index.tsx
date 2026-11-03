import { useMemo, useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { VagasContainer } from './styles'

type VagaType = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaType[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo (ead)',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML 5', 'CSS 3', 'JavaScript', 'React']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'Rio de Janeiro (ead)',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['NodeJS', 'TypeScript', 'SQL']
  },
  {
    id: 3,
    titulo: 'Designer UI/UX',
    localizacao: 'São Paulo (presencial)',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 4000,
    requisitos: ['Figma', 'Adobe XD', 'Prototipagem']
  },
  {
    id: 4,
    titulo: 'Desenvolvedor Front-end React',
    localizacao: 'São Paulo (ead)',
    nivel: 'Sênior',
    modalidade: 'PJ',
    salarioMin: 7000,
    salarioMax: 8500,
    requisitos: ['React', 'Styled Components', 'TypeScript']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor Fullstack',
    localizacao: 'São Paulo (ead)',
    nivel: 'Pleno',
    modalidade: 'CLT',
    salarioMin: 6000,
    salarioMax: 7500,
    requisitos: ['Python', 'React', 'Docker']
  },
  {
    id: 6,
    titulo: 'Analista de QA',
    localizacao: 'São Paulo (ead)',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 2500,
    salarioMax: 3500,
    requisitos: ['Testes Automatizados', 'Jest', 'Cypress']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState('')

  const vagasFiltradas = useMemo(() => {
    const termo = filtro.toLocaleLowerCase()
    return vagas.filter((vaga) =>
      [
        vaga.titulo,
        vaga.localizacao,
        vaga.nivel,
        vaga.modalidade,
        ...vaga.requisitos
      ]
        .join(' ')
        .toLocaleLowerCase()
        .includes(termo)
    )
  }, [filtro])

  return (
    <>
      <FormVagas aoPesquisar={setFiltro} />
      <VagasContainer>
        {vagasFiltradas.map((vaga) => (
          <Vaga key={vaga.id} {...vaga} />
        ))}
        {vagasFiltradas.length === 0 && <p>Nenhuma vaga encontrada.</p>}
      </VagasContainer>
    </>
  )
}

export default ListaVagas
