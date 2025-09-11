import { useEffect ,useState }  from "react";
import React from  "react"
import "../../server"
import { Link } from "react-router-dom";
export default function Vans(){
    const [vans,setVans] =  useState([])
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then (data => setVans(data.vans))
    }, [])

    const vanElements = vans.map((van) => (
        <React.Fragment key={van.id } > 
        <Link 
           to = {`/vans/${van.id}` }
           className = "van-link"
           aria-label= {`view details for ${van.name} priced ${van.price} per day`}>
        <div key= {van.id} className="van-tile">
            <img  src=  {van.imageUrl} alt= {`image of ${van.name}`} />
            <div className="van-info">
                <p>{van.name}</p>
                <p>{van.price} <span>/day</span></p>
            </div>
            <i className= {`van-type ${van.type} selected`}> {van.type} </i>
        </div>
        </Link>
        </React.Fragment>
    ))
    return(
        <div className="van-list-container">
            <h2>Explore our van options</h2>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}
