import { Component, OnInit } from '@angular/core';
import { MyAppState, IFood, ACTIONS, Action } from '../food.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.css'
})
export class FoodFormComponent implements OnInit {

  //  food:IFood;
  food: IFood = {
    id: 0,
    name: "",
    description: "",
    color: "",
    group: ""
  }

  constructor(private store: Store<MyAppState>) {
  }

  ngOnInit() {

  }

  /*addFood(food:IFood){
    let addAction:Action = {
      type: ACTIONS.ADD_FOOD,
      payload:Object.assign({},food)
    }
    this.store.dispatch(addAction)
  }*/


  addFood(food: IFood) {
    let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({}, food)
    }
    this.store.dispatch(addAction);
  }

}
