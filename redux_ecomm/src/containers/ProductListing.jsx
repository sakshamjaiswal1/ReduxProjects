import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import Productcomponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'

   

function ProductListing() {

    const products=useSelector((state)=>state)
    const dispatch = useDispatch()
    
    const fetchProducts= async ()=>{
        const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log('Error', err)
        })
        dispatch(setProducts(response.data))

}

useEffect(()=>{
fetchProducts()
},[])
console.log('Products:',products)
    return (
        <div className='ui grid container'>
           <Productcomponent/>
        </div>
    )
}

export default ProductListing
