import {Link} from "react-router-dom"
import Bgimage  from "../../assets/images/about-bg.png"

export default function About(){
    return(
         <main className="about">
            <img src= {Bgimage} />
            <h3>Don’t squeeze in a sedan when you could relax in a van.</h3>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) </p>
                
               <p> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

             <section>
                        <p className="text">Your destination is waiting.</p>
                <p> Your van is ready.</p>
                <Link className="link-button" to= "/vans" >Explore our vans</Link>
            </section>  
         </main>
    );
}