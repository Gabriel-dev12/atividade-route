import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
     background-color: blue;
     padding: 0 60px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     font-family: Arial, Helvetica, sans-serif;
     & h1{
        color: #ffffff
     }
     & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;
        & li a{
            color: #ffffff80;
            text-decoration: none;
            &:hover, &.active{
                color: #ffffff;
                text-decoration:underline;
            }
        }

     }

`; 

const Header = () => {
    return ( 
        <HeaderContainer>
        <h1>logo</h1>
        <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/contato"}>Contato</NavLink></li>
                <li><NavLink to={"/sobre"}>Sobre</NavLink></li>
            </ul>
        </nav>
        </HeaderContainer>
     );
}
 
export default Header;