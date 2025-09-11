import { Link , Outlet , useParams,NavLink} from "react-router-dom";
import { useEffect , useState } from "react";
export default function HostVansDetail(){
    const {id} = useParams()
        const [currentVan,setCurrentVan] = useState(null);
        useEffect(()=> {
            fetch(`/api/host/vans/${id}`)
                .then(res => res.json())
                .then(data => setCurrentVan(data.vans))
        },[id])

        if(!currentVan){
            return <h2>Loading...</h2>
        }
    return(
        <section className="van-detail-container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
             <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink to = "."
                    end
                    style={ ({isActive}) => isActive ?  
                    {textDecoration : "underline", color : "#161616", fontWeight :"bold"} : null}>
                        Details 
                    </NavLink>

                    <NavLink to = "pricing"
                    style={ ({isActive}) => isActive ?  
                    {textDecoration : "underline", color : "#161616", fontWeight :"bold"} : null}>
                        Pricing
                    </NavLink>

                    <NavLink to = "photos"
                    style={ ({isActive}) => isActive ?  
                    {textDecoration : "underline", color : "#161616", fontWeight :"bold"} : null}>
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{currentVan}} />
            </div> 
            
        </section>
    );
}