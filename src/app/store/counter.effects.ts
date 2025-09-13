import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment ,init, set} from "./counter.actions";
import { switchMap, tap, withLatestFrom,of } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects{
    loadCount = createEffect(
        ()=> this.actions$.pipe(
            ofType(init),
            switchMap(()=>{
                const storedCounter = localStorage.getItem('count');
                console.log('STORED COUNTER: ',storedCounter)
                if(storedCounter){
                    return of(set({value: +storedCounter}))
                }
                return of(set({value:0}));
            })
        )
    );

    saveCount = createEffect(
        ()=> this.actions$.pipe(
            ofType(increment, decrement),
            withLatestFrom(this.store.select(selectCount)),
            tap(([action, counter])=>{
                console.log('ACTION: ',action);
                localStorage.setItem('count', counter.toString());
            })
        ),
        {dispatch: false}
    )

    constructor(private actions$: Actions, private store: Store<{counter: number}>){}
}