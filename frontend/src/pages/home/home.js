import {Slider} from '../../components/slider/slider'
import { ProductSearch } from '../productSearch/productSearch';
import Categories from "../../components/CategoryComp/Categories/Categories"
import './home.scss'
export function Home(){
    return(
        <>
            <div className = "home-body" >

                <ProductSearch/>
                <Slider/>
                <Categories/>
            </div>
        </>
    )
} 