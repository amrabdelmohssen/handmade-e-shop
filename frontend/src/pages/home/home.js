import {Slider} from '../../components/slider/slider'
import { ProductSearch } from '../productSearch/productSearch';
import Categories from "../../components/CategoryComp/Categories/Categories"
export function Home(){
    return(
        <>
            <ProductSearch/>
            <Slider/>
            <Categories/>

        </>
    )
} 