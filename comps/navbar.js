import styled from "styled-components";
import { H2, H3 } from "./global";
import { useRouter } from "next/router";

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
    pointer-events: visible
`
export default function NavBar(){
    const r = useRouter()
    const HandleNavBarIcons = (name) => {
        r.push(name);
      };
    return(
        <NavBarContainer>
            <Cont onClick={()=>HandleNavBarIcons("/")}>
                <MiniLogo src="/sandra-logo.svg"></MiniLogo>
                <H2>Sandra's Cleaning</H2>
            </Cont>
            <Cont>
                <H3 onClick={()=>HandleNavBarIcons("/about")}>About</H3>
                <H3 onClick={()=>HandleNavBarIcons("/services")}>Services</H3>
                <H3 onClick={()=>HandleNavBarIcons("/contact")}>Contact</H3>
            </Cont>
        </NavBarContainer>
    )
}