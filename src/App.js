import React , {useState, useEffect} from "react";
import axios from 'axios'
import pokedexImg from './pokedexImg.jpg'
import "./App.css";
function App() {
 
  const [pokedex,setPokedex] = useState([])
  const [pokemonId,setPokemonId] = useState()
  const [wildPokemon, setWildPokemon] = useState({});
  useEffect(()=>{
    encounterWildPokemon()
    pokeId()
  },[pokemonId])
  const pokeId = () => {
    const min = Math.ceil(1)
    const max = Math.floor(151)
    setPokemonId( Math.floor(Math.random() * (max - min + 1)) + min)
    return (Math.floor(Math.random() * (max - min + 1)) + min)
  }
  const encounterWildPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
      .then(response => {
        setWildPokemon(response.data);
      })
  }
  return (
    <div className="app-wrapper">
     

     
        <img  src={pokedexImg} class=" outer-image " ></img>
        <div class="inner-image">

        <img  src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} className="sprite" />
        <button onClick={()=>pokeId()}>{wildPokemon.name}</button>
        </div>

    </div>
  );
}

export default App;
