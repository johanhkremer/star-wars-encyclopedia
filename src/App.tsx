
import Container from "react-bootstrap/Container"
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'

function App() {

  return (
    <div id="App">
      <Navigation />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </div>

  )
}

export default App
