import './social.css'
import {Link} from "react-router-dom";

export function Socail (){
    return(
        <>
        <article className='social-rticle'>
            <Link to={""}>
                <i className="fab fa-twitter"></i>
            </Link>
            <Link to={""}>
                <i className="fab fa-facebook px-3"></i>
            </Link>
            <Link to={""}>
                <i className="fab fa-instagram"></i>
            </Link>
            <Link to={""}>
                <i className="fab fa-youtube px-3"></i>
            </Link>
            </article>




        </>
    )
    
}