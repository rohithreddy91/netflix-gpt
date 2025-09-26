/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
useNowPlayingMovies();

const gptSearch = useSelector(store=>store.gpt.gptSearchView);
//console.log("gptSearchComponent", gptSearch);



  return(
    <div>
      {/* {
      -main container
        -title
        -videocontainer
      -Secondary container
        -cards

      } */}
        <Header/>
        { gptSearch ? <GptSearch/>:<><MainContainer/>
        <SecondaryContainer/></>}
        
    </div>
  )

};

export default Browse;