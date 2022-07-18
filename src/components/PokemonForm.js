import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onNewPokeSubmit }) {
  const [newPokeName, setNewPokeName] = useState("")
  const [newPokeHP, setNewPokeHP] = useState("")
  const [newPokeFront, setNewPokeFront] = useState("")
  const [newPokeBack, setNewPokeBack] = useState("")

  function handleNewName(e){
    setNewPokeName(e.target.value)
  }

  function handleNewHP(e){
    setNewPokeHP(e.target.value)
  }

  function handleNewPokeFront(e){
    setNewPokeFront(e.target.value)
  }

  function handleNewPokeBack(e){
    setNewPokeBack(e.target.value)
  }

  function handleNewPokeSubmit(e){
    e.preventDefault()
    const newPokemon = {
      "name": newPokeName,
      "hp": newPokeHP,
      "sprites": {
        "front": newPokeFront,
        "back": newPokeBack
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": newPokemon.name,
        "hp": newPokemon.hp,
        "sprites": {
          "front": newPokemon.sprites.front,
          "back": newPokemon.sprites.back
        }
      })
    })
      .then(r => r.json())
      .then(data => onNewPokeSubmit(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleNewPokeSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNewName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleNewHP}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleNewPokeFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleNewPokeBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
