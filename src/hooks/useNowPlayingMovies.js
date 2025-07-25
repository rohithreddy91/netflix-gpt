/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
  const fetchMovieList = async()=>{

    const moviesData = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    const movies = await moviesData.json();
    dispatch(addNowPlayingMovies(movies.results));
    //console.log("movies",movies.results);
  };

  useEffect(()=>{
    fetchMovieList();
  },[])
};

export default useNowPlayingMovies;