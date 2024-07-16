import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageLayout/>}>
            <Route index element={<Home />} />
            <Route path="/contato" element={<Contact/>}/>
            <Route path="/sobre" element={<About/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Paths;