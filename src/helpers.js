import {v1 as uuid} from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

// Desired format for Playing Cards
function formatCard(data){
  return {
    id: uuid(),
    image: data.cards[0].image
  }
}

// Desired format for Pokemon Cards
function formatPokemon(data){
  let rObj = {
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name
    }))
  }

  return rObj
}

export { choice, formatCard, formatPokemon };