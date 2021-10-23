export const setData=(products)=>{
    console.log("products",products)
    return {
        type:"SET_DATA",
        payload:products
    }
}
export const page=(products)=>{
    // console.log("products",products)
    return {
        type:"PAGE",
        payload:products
    }
}
export const productItem=(products)=>{
    // console.log("products",products)
    return {
        type:"PRODUCT",
        payload:products
    }
}
export const randomItem=(products)=>{
    // console.log("products",products)
    return {
        type:"RANDOM",
        payload:products
    }
}