import { usePokemonList } from "../api/FetchAPI";
import { Link } from "react-router-dom";

function PokemonListFetcher() {
  const { pokemonList, listLoading, listError } = usePokemonList();
  if (listLoading) return <div>Загрузка...</div>;
  if (listError) return <div>Ошибка: {listError}</div>;

  return (
    <div>
      <p>
        В нашей базе {pokemonList.count} покемона
        <br />
      </p>
      <ul className="card-style-list">
        {pokemonList.results &&
          pokemonList.results.map((pokemon) => (
            <li key={pokemon.name} className="card-style">
              <Link to={`/pokemonDetails/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PokemonListFetcher;
