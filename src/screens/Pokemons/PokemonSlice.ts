import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonsList } from "../../api/Pokemon.api";
import { IPokemon } from "../../models/Pokemon.model";

interface IPokemonRequest {
  data: IPokemon[],
  status: string,
  error: (string | null)
}

const initialState: IPokemonRequest = {
  data: [],
  status: 'idle',
  error: null
}

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.status = 'loading'
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.status = 'failed'
      state.error = false;
    });
  }

});

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => {
  const response = await getPokemonsList();
  return response;
})

// Action creators are generated for each case reducer function
export const { setPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;