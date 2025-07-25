
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";

const Body =  ()=>{
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    return (
        <div>
             <Provider store={appStore}>
            <RouterProvider router= {appRouter}/>
            </Provider>
        </div>
    )
};
export default Body;