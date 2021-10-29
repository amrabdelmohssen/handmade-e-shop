import './search.css'
export function Search(){
    return(
        <>
            <div className="search">

                <form class="d-flex justify-content-center px-5 mx-5 ">
                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                     <button class="navBar-search-button" type="submit">Search</button>
                </form>
            </div>
        
        </>
    )
}