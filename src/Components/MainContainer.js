import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import TitleContainer from "./TitleContainer";

const MainContainer =  ()=> {

    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    //console.log("movies", movies);
    if(!movies) return;

    const mainMovie = movies[0];

    console.log(mainMovie);
    const { original_title, overview , id} = mainMovie;

    return (
        <div>
        <TitleContainer title={original_title} overview={overview} />
         <VideoContainer movieId={id} />
        </div>
    )
};
export default MainContainer;