
import Container from "react-bootstrap/Container"
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import People from './pages/People'
import Planets from './pages/Planets'
import Films from './pages/Films'
import SpeciesMultiple from './pages/SpeciesMultiple'
import Starships from './pages/Starships'
import Vehicles from './pages/Vehicles'
import Film from "./pages/Film"
import Person from "./pages/Person"
import Planet from "./pages/Planet"
import SpeciesSingle from "./pages/SpeciesSingle"
import Starship from "./pages/Starship"
import Vehicle from "./pages/Vehicle"

function App() {

  return (
    <div id="App">
      <Navigation />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<Person />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<Planet />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<Film />} />
          <Route path="/species" element={<SpeciesMultiple />} />
          <Route path="/species/:id" element={<SpeciesSingle />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<Vehicle />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={<Starship />} />
          <Route path="*">"404 Not Found"</Route>
        </Routes>
      </Container>
    </div>

  )
}

export default App
