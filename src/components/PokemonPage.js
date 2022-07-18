import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(data => setPokemonList(data))
  }, [])

  function handleSearch(e){
    setSearchTerm(e.target.value)
  }

  const pokemonToDisplay = pokemonList.filter(pokemon => {
    if (searchTerm.length > 0){
      return (pokemon.name.includes(searchTerm))
    } else {
      return true
    }
  })

  function handleNewPokeSubmit(newPoke){
    setPokemonList([...pokemonList, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokeSubmit={handleNewPokeSubmit}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemonList={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
