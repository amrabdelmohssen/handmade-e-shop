import {CopyRight} from './copyRight/copyRight'
import {Socail} from './social/social'
export function CopyRightAndSoial(){
    return(
        <>
       <section className="py-3 d-flex justify-content-around"> 
            <CopyRight/>
            <Socail/>
        </section>
        </>
    )
}