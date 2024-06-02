
import { Routes, Route } from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Film from "./pages/Film"
import Films from './pages/Films'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import People from './pages/People'
import Person from "./pages/Person"
import Planet from "./pages/Planet"
import Planets from './pages/Planets'
import SpeciesMultiple from './pages/SpeciesMultiple'
import SpeciesSingle from "./pages/SpeciesSingle"
import Starship from "./pages/Starship"
import Starships from './pages/Starships'
import Vehicle from "./pages/Vehicle"
import Vehicles from './pages/Vehicles'
import './assets/styles/scss/app.scss'

function App() {

  return (
    <div id="App">
      <Navigation />

      <Container>
        <Routes>
          <Route path="*">"404 Not Found"</Route>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<Film />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<Person />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<Planet />} />
          <Route path="/species" element={<SpeciesMultiple />} />
          <Route path="/species/:id" element={<SpeciesSingle />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={<Starship />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<Vehicle />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
