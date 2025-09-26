import { LONG_BG_URL } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggesstions";
import GptSearchBar from "./GptSearchBar";
const GptSearch = ()=>{
    return (
        <div>
            <div className="-z-10 absolute">
                <img alt="logo"
                src = {LONG_BG_URL}/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    );
};
export default GptSearch;