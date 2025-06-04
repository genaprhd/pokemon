import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';
import PokemonListFetcher from './PokemonList';
import RandomPokemon from './PokemonDetails'; // убедитесь, что этот компонент существует
import NotFound from './Error';
import PokemonFetcher from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-list" element={<PokemonListFetcher />} />
        <Route path="/random" element={<RandomPokemon />} />
        <Route path="/pokemonDetails" element={<PokemonFetcher />} />
        <Route path="/pokemonDetails/:pokemonName" element={<PokemonFetcher />} />
        {/* Убедитесь, что путь к компоненту RandomPokemon корректен */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;