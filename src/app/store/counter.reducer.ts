import { createReducer,on } from "@ngrx/store";
import { increment } from "./counter.actions";
const initialState = 0;

// New approach
// export const counterReducer = createReducer(
//     initialState, 
//     on(increment,(state, action)=> state + action.value )
// ) 

// Old version approach : Handling actions without createReducer()
export function counterReducer(state=initialState, action: any, ){ //pass initial state as default value
    if(action.type === '[Counter] Increment'){
        return state + action.value;
    }
    console.log('state: ',state);
    return state;
}