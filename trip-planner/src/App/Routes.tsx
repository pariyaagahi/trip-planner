import {Routes, Route} from "react-router-dom";
//pages
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import MainPage from "../Pages/MainPage";
import MainLayout from "../Pages/MainLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<MainPage/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default AppRoutes;