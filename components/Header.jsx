import { NavLink , Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"

export default function Header(){
    return(
        <>
        <header>
            <Link to= "/"><img src={Logo}  alt="logo" className="logo"/> </Link>
                <nav>
                    <NavLink to = "/host"
                    className= {({isActive}) =>  isActive ?  "active-link" : null}
                    >Host</NavLink>
                    <NavLink to= "/about" 
                    className= {({isActive}) =>  isActive ?  "active-link" : null}
                    >About</NavLink>
                    <NavLink to= "/vans" 
                    className= {({isActive}) =>  isActive ?  "active-link" : null}
                    >Vans</NavLink>
                </nav>
        </header>
        </>
    );
}