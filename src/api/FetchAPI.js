import { useState, useEffect } from "react";

export function usePokemonData(pokemonName) {
  const [pokemonData, setPokemonData] = useState(null);
  const [dataLoading, setLoading] = useState(true);
  const [dataError, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!response.ok) {
          throw new Error("Данные не загружены. Проверьте имя покемона или попробуйте позже.");
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return { pokemonData, dataLoading, dataError };
}

export function usePokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [listLoading, setLoading] = useState(true);
  const [listError, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        if (!response.ok) {
          throw new Error("Список покемонов не загружен. Проверьте соединение или попробуйте позже.");
        }
        const data = await response.json();
        setPokemonList(data);
        setLoading(false);}
        catch (err) {
        setError(err.message);
        setLoading(false);
    }
  }
    fetchPokemonList();
  }, []);
  return { pokemonList, listLoading, listError };
}