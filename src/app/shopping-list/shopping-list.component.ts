import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServiceService } from './shopping-list-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListServiceService) { }

  ngOnInit() {

    this.ingredients = this.slService.getIngredient();
    this.subscription = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
    )
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }



}
