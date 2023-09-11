import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignUp from "../pages/auth/SignUp"

export const mainRoute = createBrowserRouter([
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/sign-up",
        element:<SignUp/>
    },
])
