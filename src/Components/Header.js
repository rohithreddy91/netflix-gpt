import { useDispatch, useSelector } from "react-redux";
import { BG_URL, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { setGptSearchView } from "../Utils/GptSearchSlice";
import { languageSelection } from "../Utils/configSlice";
const Header = ()=>{
    const dispatch = useDispatch();

    const handleGPTSearchButtonClick = ()=>{
        dispatch(setGptSearchView());
    }

    const handleLanguageChange = (e)=>{
        dispatch(languageSelection(e.target.value));
    }

    const showGptSearch = useSelector(store=>store.gpt.gptSearchView)

    return (
        <div className="w-screen absolute z-10 bg-gradient-to-b from-black to-transparent">
            <img alt="logo" className="w-40 p-2"
            src= {BG_URL} />
            <button className="bg-purple-900 text-white p-2 rounded-md absolute right-10 top-4"
            onClick={handleGPTSearchButtonClick}
            >
                {showGptSearch ? "Home":"GptSearch"}
            </button>
            <div className="absolute right-10 top-16">
            {showGptSearch && <select onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>
                {language.name}
                </option>)
            }
        </select>}
        </div>
        </div>
    )
};

export default Header;
