import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import Ticket from "./components/Ticket"

const router = createBrowserRouter([
    { path: "/", element: <Home/>, errorElement: <p>Erro!</p> },
    { path: "/ticket", element: <Ticket/> },
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}