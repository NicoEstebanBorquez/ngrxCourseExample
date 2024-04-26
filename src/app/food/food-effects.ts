import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs";

@Injectable()
export class FoodEffects {

    getFood$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType('GET_FOODS'),
            mergeMap(action =>
                this.http.get("http://localhost:3000/foods").pipe(
                    map(data => ({ type: 'GET_FOODS_SUCCESS', payload: data })),
                    catchError(() => of({ type: 'GET_FOODS_FAILED' }))
                )
            )
        )
    )

    constructor(
        private http: HttpClient,
        private actions$: Actions
    ) { }

}