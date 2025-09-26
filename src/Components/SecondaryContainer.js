import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer =  ()=>{
    const moviesList = useSelector(store=>store.movies);
    //console.log("SecondaryContainer", moviesList);
    return (
        moviesList.nowPlayingMovies && 
            <div className="bg-black scrollbar-hide">
            <div className="-mt-56 pl-12 relative z-20 ">
            <MovieList title={"Now Playing"} movies={moviesList.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={moviesList.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={moviesList.nowPlayingMovies}/>
            <MovieList title={"Upcoming"} movies={moviesList.nowPlayingMovies}/>
            <MovieList title={"Horror"} movies={moviesList.nowPlayingMovies}/>
            </div>
        </div>
    )
};
export default SecondaryContainer;