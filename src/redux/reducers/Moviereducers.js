const initialState={
    data:[],
    page:1,
    product:[],
    randomItems:[]
}

export const Moviereducers=(state=initialState,action)=>{
    switch(action.type){
        case "SET_DATA":   
            return {...state,data:action.payload}
        case "PAGE":
            return {...state,page:action.payload}
        case "PRODUCT":
            return {...state,product:action.payload}
        case "RANDOM":
            return {...state,randomItems:action.payload}
        default:
            return state
    }
}