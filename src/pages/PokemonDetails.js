import {usePokemonData} from "../api/FetchAPI";
import { useParams } from "react-router-dom";
import "../styles/PokemonList.css";

function PokemonFetcher(){

  const { pokemonName } = useParams();
  const { pokemonData, dataLoading, dataError } = usePokemonData(pokemonName);
  if (dataLoading) return <div>Загрузка...</div>;
  if (dataError) return <div>Ошибка: {dataError}</div>;

  return (
    <div>
      <p>
        Мы загрузили <span><br/>{pokemonData.name}</span>
        <br />
        <img className="pokemon-img" src={pokemonData.sprites.other.showdown.front_default} alt={pokemonData.name} />
      </p>
    </div>
  );
}

export default PokemonFetcher;
