import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Categories from "../Pages/Categories";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                Component: Home,
            },
            {
                path:'/about',
                Component:About
            },{
                path: '/category/:id',
                Component:Categories,
                loader: () => fetch("../news.json")
            },
           


        ]
        
    }
])

export default router;