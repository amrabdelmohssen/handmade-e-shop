import { InfoFooter } from "./informationFooter/infoFooter";
import { CopyRightAndSoial } from "./soialAndCopyRight/copyRightandSocial";
import'./footer.css'

export function Footer(){
    return(
        <>
        <section className='footer-bg-color'>
            <InfoFooter/>
            <hr/>
            <CopyRightAndSoial/>
            </section>    
        </>
    )
}