import { useSelector } from "react-redux";
import language from "../Utils/languageConstants";

const GptSearchBar = ()=>{

    const selectLanguage = useSelector((store)=>store.config.selectedLanguage)

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12">
                <input type="text" placeholder={language[selectLanguage]?.movieSearch} className="p-4 m-4 col-span-9" />
                <button type="submit" className="bg-red-600 py-2 px-4 m-4 rounded col-span-3">{language[selectLanguage]?.search}</button>
            </form>
        </div>
    )
};

export default GptSearchBar;
