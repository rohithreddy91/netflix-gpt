// import { useEffect, useState } from "react";
// import { API_OPTIONS } from "../Utils/constants";

// const useMovie = ({movieId})=>{
//     const [trailerKey,setTrailerKey] = useState(null);

//     const videoApi = async()=>{
//         const videoData = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos",API_OPTIONS);
//         const video = await videoData.json();
//         console.log("video", video);
//         const trailerResults = video.results.filter(video =>video.type==="Trailer");
//         console.log("trailerResults", trailerResults);
//         const trailerData = trailerResults.length ? trailerResults[3] :video.results[0];
//         console.log("trailerData", trailerData);
//         setTrailerKey(trailerData?.key);
//     };

//     useEffect(()=>{
//         videoApi();
//     },[]);
// };
// export default useMovie;