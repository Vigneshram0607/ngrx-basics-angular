import { createReducer,on } from "@ngrx/store";
import { increment } from "./counter.actions";
const initialState = 0;

// New approach
export const counterReducer = createReducer(
    initialState, 
    on(increment,(state)=> state+1 )
) 

// Old version approach
// export function createReducer(state=initialState){ //pass initial state as default value
//     return state;
// }