import AddProducts from "../pages/AddProducts";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import UserRoot from "../pages/UserRoot";

export let ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/:id",
                element:<Detail/>
            },
            {
                path:"/addproducts",
                element:<AddProducts/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"*",
                element:<NoPage/>
            }
        ]
    }
]