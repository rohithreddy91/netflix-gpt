/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constants";

const VideoContainer = ({movieId})=>{

    const [trailerKey,setTrailerKey] = useState(null);

    const videoApi = async()=>{
        const videoData = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos",API_OPTIONS);
        const video = await videoData.json();
        //console.log("video", video);
        const trailerResults = video.results.filter(video =>video.type === "Trailer");
        //console.log("trailerResults", trailerResults);
        const trailerData = trailerResults.length ? trailerResults[0] : video.results[0];
        //console.log("trailerData", trailerData);
        setTrailerKey(trailerData?.key);
    };

    useEffect(()=>{
        videoApi();
    },[]);


    return (
        <div className="w-screen ">
            <iframe
            className="w-screen aspect-video"
             src={"https://www.youtube.com/embed/"+trailerKey+"?autoplay=1&mute=1"}
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerpolicy="strict-origin-when-cross-origin" 
             allowFullScreen></iframe>
        </div>
    )
};
export default VideoContainer;