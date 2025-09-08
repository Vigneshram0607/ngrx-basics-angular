import { createReducer } from "@ngrx/store";
const initialState = 0;

// New approach
export const counterReducer = createReducer(
    initialState
) //action, old state

// Old version approach
// export function createReducer(state=initialState){ //pass initial state as default value
//     return state;
// }