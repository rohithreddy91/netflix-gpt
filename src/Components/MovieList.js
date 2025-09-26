import MovieCard from "./MovieCard";

const MovieList = ({title,movies})=>{
    //console.log("MovieList", movies);
    if(!movies || movies.length === 0) return null;
    //const posterPath = movies.map((m)=>m.poster_path);

    //const posterPath = movies[0]?.poster_path;
    
    return (
        <div className="px-6 ">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <div className="flex overflow-x-scroll ">
            <div className="flex">
                {movies.map(m => (<MovieCard key={m.id} path={m.poster_path} />))}
            </div>
            </div>
        </div>
    )
};
export default MovieList;