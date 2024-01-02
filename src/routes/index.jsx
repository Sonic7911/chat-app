import Index from "../modules/HomePage";
import DashBoard
 from "../modules/dashboard/DashBoard";
 import Form from "../modules/form";
 


export const routes = [

    {
        path: '/',
        element: <Index />
    },
    {
        path: '/dashboard',
        element: <DashBoard />
    },
    {
        path: '/form',
        element: <Form />
    }
]   ;