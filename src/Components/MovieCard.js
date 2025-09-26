const MovieCard = ({path})=>{
    return (
        <div className="w-40 pr-4 ">
            <img src={"https://image.tmdb.org/t/p/w200/" +path} alt="Movie Poster" />
        </div>
    )
};
export default MovieCard;