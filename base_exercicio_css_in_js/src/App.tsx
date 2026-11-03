import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <main>
        <Container>
          <ListaVagas />
        </Container>
      </main>
    </>
  )
}

export default App
