import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { food_reducer } from './food/food.reducer';

//FoodService
import { HttpClientModule } from '@angular/common/http';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodFormComponent } from './food/food-form/food-form.component';

import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './food/food-effects';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    StoreModule.forRoot({ foods: food_reducer }),
    EffectsModule.forRoot([FoodEffects]),
    StoreDevtoolsModule.instrument({maxAge:12}),
    AppRoutingModule
  ],
  providers: [
    //FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
