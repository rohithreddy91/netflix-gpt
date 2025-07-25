const Title = ({title, overview})=>{
    return (
            <div className="pt-[15%] aspect-video px-24 absolute bg-gradient-to-r from-black"> 
            <h1 className="text-3xl text-white font-bold">{title}</h1>
            <p className="w-1/4 text-white py-6">{overview}</p>
     
        <div>
            <button className ="bg-gray-200 text-black px-4 py-2 rounded mr-4 hover:bg-opacity-80">
                ▶️ Play
            </button>
            <button className ="bg-gray-200 text-black px-4 py-2 rounded">
                ℹ️ More Info
            </button>
        </div>
    </div>
    )
};
export default Title;
