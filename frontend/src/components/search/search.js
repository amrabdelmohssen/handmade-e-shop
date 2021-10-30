import './search.css'
export function Search(){
    return(
        <>
            <div className="search">

                <form className="d-flex justify-content-center px-5 mx-5 ">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                     <button className="navBar-search-button" type="submit">Search</button>
                </form>
            </div>
        
        </>
    )
}