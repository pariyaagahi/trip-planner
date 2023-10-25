import {Routes, Route} from "react-router-dom";
//pages
import NotFound from "../Pages/NotFound";
import MainPage from "../Pages/MainPage";
import MainLayout from "../Pages/MainLayout";
import Authentication from "../Pages/Auth";
import AddEvent from "../Pages/AddEvent";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/auth' element={<Authentication/>}/>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/add-event' element={<AddEvent/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default AppRoutes;