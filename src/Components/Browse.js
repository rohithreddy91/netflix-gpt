/* eslint-disable react-hooks/exhaustive-deps */
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
useNowPlayingMovies();


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
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )

};

export default Browse;