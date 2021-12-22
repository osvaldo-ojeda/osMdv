import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPeliculas = createAsyncThunk("GET_PELICULAS", (search) => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=6d19b6f0&s=${search}`)
    .then((res) => {
      return res.data.Search;
    })
    .catch(err=>err)
});

export const getPelicula=createAsyncThunk("GET_PELICULA",(param) => {
  return axios
  .get(`http://www.omdbapi.com/?apikey=6d19b6f0&i=${param}`)
  .then((res) => {
    return res.data;
  })
  .catch(err=>err)
})

const peliculasReducer = createReducer([], {
  [getPeliculas.fulfilled]: (state, action) => (state = action.payload),
  [getPelicula.fulfilled]: (state, action) => (state = action.payload)
});

export default peliculasReducer;
