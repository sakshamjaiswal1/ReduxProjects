import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async  (dispatch) =>{
    const response = await fakeStoreApi.get("/products");
    console.log(response);
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (id) => async (dispatch)=>{
    const response= await fakeStoreApi.get(`/products/${id}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
}
  
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
