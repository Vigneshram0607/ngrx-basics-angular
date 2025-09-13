import { Action, createReducer,on } from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import { decrement, increment } from "./counter.actions";
const initialState = 0;

// New approach
export const counterReducer = createReducer(
    initialState, 
    on(increment,(state, action)=> state + action.value ),
    on(decrement, (state,action)=>state-action.value)
) 

// Old version approach : Handling actions without createReducer()
// export function counterReducer(state=initialState, action: CounterActions | Action ){ //pass initial state as default value
//     if(action.type === INCREMENT){
//         return state + (action as IncrementAction).value;
//     }
//     console.log('state: ',state);
//     return state;
// }