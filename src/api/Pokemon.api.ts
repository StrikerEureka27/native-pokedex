import { IPokemon } from "../models/Pokemon.model";

const DEFAULT_POKEMON_BULK = 20;
const BASE_POKEMON_API: string = "https://pokeapi.co/api/v2";

const getPokemonsList = async (bulkLimit: number = DEFAULT_POKEMON_BULK) => {
    try {
        const response = await fetch(`${BASE_POKEMON_API}/pokemon?limit=${bulkLimit}`, {
            method: "GET"
        });
        if(response.status === 200){
            const bulk = await response.json();
            let pokemons = await Promise.all(bulk.results.map((result: IPokemon)=> getPokemon(result.name)));
            return pokemons;
        }

    } catch (error) {
        throw error;
    };
};

const getPokemon = async (pokemonName: string) => {
    try {
        const response = await fetch(`${BASE_POKEMON_API}/pokemon/${pokemonName}`);
        const pokemon = await response.json();
        return pokemon;
    } catch (error) {
        throw error;
    };
};

export { getPokemonsList };
