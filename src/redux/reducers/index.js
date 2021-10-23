import {combineReducers} from "redux";
import { Moviereducers } from "./Moviereducers";

const rootReducer=combineReducers({
    movies:Moviereducers
})

export default rootReducer;