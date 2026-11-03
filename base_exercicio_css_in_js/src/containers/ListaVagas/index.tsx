import { useState } from 'react'
import styled from 'styled-components'

import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'

/* eslint-disable @typescript-eslint/no-explicit-any */
const ListaContainer = styled.ul<any>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

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

const vagasCabecalho: VagaType[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'são paulo (ead)',
    nivel: 'júnior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['Html 5', 'Css 3', 'JavaScript', 'React']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'rio de janeiro (ead)',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['NodeJS', 'TypeScript', 'SQL']
  },
  {
    id: 3,
    titulo: 'Designer UI/UX',
    localizacao: 'são paulo (presencial)',
    nivel: 'júnior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4000,
    requisitos: ['Figma', 'Adobe XD', 'Prototipagem']
  },
  {
    id: 4,
    titulo: 'Desenvolvedor Front-end React',
    localizacao: 'são paulo (ead)',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 7000,
    salarioMax: 8500,
    requisitos: ['React', 'Styled Components', 'TypeScript']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor Fullstack',
    localizacao: 'são paulo (ead)',
    nivel: 'pleno',
    modalidade: 'clt',
    salarioMin: 6000,
    salarioMax: 7500,
    requisitos: ['Python', 'React', 'Docker']
  },
  {
    id: 6,
    titulo: 'Analista de QA',
    localizacao: 'são paulo (ead)',
    nivel: 'júnior',
    modalidade: 'clt',
    salarioMin: 2500,
    salarioMax: 3500,
    requisitos: ['Testes Automatizados', 'Jest', 'Cypress']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagasCabecalho.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ListaContainer>
        {vagasFiltradas.map((object) => (
          <Vaga
            key={object.id}
            titulo={object.titulo}
            localizacao={object.localizacao}
            nivel={object.nivel}
            modalidade={object.modalidade}
            salarioMin={object.salarioMin}
            salarioMax={object.salarioMax}
            requisitos={object.requisitos}
          />
        ))}
      </ListaContainer>
    </div>
  )
}

export default ListaVagas
