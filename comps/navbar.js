import styled from "styled-components";
import { H2, H3, H4, Hero } from "./global";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBarContainer = styled.div`
    width:100vw;
    height:100px;
    background:#FFF5ED;
    display:flex;
    justify-content:space-between;
    padding: 0px 20px;
`
const Cont = styled.div`
    display:flex;
    align-items:center;
    height:100px;
    width:fit-content;

`
const MiniLogo = styled.img`
    height:70%;
    cursor:pointer
`
const Bar = styled.div`
    width:100vw;
    height:40px;
    background:#16425B;
    color:white;
    font-size:16px;
    text-align:center;
    padding:5px;
    border-bottom: 2px solid #FFF5ED
`
const BarCont = styled.div`
    position:absolute;
    left:0;
    top:100px;
`
export default function NavBar(){
    const r = useRouter()
    const HandleNavBarIcons = (name) => {
        r.push(name);
      };
    const HandleHamburger = () => {
        if(hamburger !== !hamburger){
            setHamburger(!hamburger)
        } 
    }
    const [hamburger, setHamburger] = useState(false)
    return(
        <NavBarContainer>
            <Cont onClick={()=>HandleNavBarIcons("/")}>
                <MiniLogo src="/sandra-logo.svg"></MiniLogo>
                <H2 className="logoTitle" cursor="pointer">Sandra's Cleaning</H2>
            </Cont>
            <Cont>
                <H3 className="navPage" onClick={()=>HandleNavBarIcons("/about")} cursor="pointer">About</H3>
                <H3 className="navPage" onClick={()=>HandleNavBarIcons("/services")} cursor="pointer">Services</H3>
                <H3 className="navPage" onClick={()=>HandleNavBarIcons("/contact")} cursor="pointer">Contact</H3>
                <Hero className="hamburger" src="/menu.png" height="50%" width="50px" bgSize="contain" bgRepeat="no-repeat" onClick={()=>HandleHamburger(hamburger)}>
                    {hamburger &&
                    <BarCont>
                        <Bar onClick={()=>HandleNavBarIcons("/about")}>About</Bar>
                        <Bar onClick={()=>HandleNavBarIcons("/services")}>Services</Bar>
                        <Bar onClick={()=>HandleNavBarIcons("/contact")}>Contact</Bar>
                    </BarCont>
                    }
                </Hero>
            </Cont>
        </NavBarContainer>
    )
}