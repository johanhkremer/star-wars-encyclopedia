
import Container from "react-bootstrap/Container"
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import People from './pages/People'
import Planets from './pages/Planets'
import Films from './pages/Films'
import Species from './pages/Species'
import Starships from './pages/Starships'
import Vehicles from './pages/Vehicles'

function App() {

  return (
    <div id="App">
      <Navigation />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/films" element={<Films />} />
          <Route path="/species" element={<Species />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="*">"404 Not Found"</Route>
        </Routes>
      </Container>
    </div>

  )
}

export default App
