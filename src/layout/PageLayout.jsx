import { Outlet } from "react-router-dom";
import Header from "../Header";



const PageLayout = () => {
    return ( 
        <>
        <Header/>
        <Outlet/>
        </>
     );
}
 
export default PageLayout;