import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServiceService } from '../shopping-list-service.service';




@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild ('f') sfForm: NgForm; 
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;
 
 

  constructor(private slService: ShoppingListServiceService) { }

  ngOnInit() {
    this.subscription = this.slService.startEditing
    .subscribe(
      (index: number) => {
         this.editItemIndex = index;
         this.editMode = true;
         this.editedItem = this.slService.getIngredients(index);
         this.sfForm.setValue({
           name: this.editedItem.name,
           amount: this.editedItem.amount
         })
      }
    )
  }

  onSubmit(form: NgForm) {
      const value = form.value
      const newIngredient = new Ingredient (value.name, value.amount);
      if (this.editMode) {
        this.slService.updateIngredient(this.editItemIndex, newIngredient);
      } else {
      this.slService.addIngredient(newIngredient);
      }
      this.editMode = false;
      form.reset();


  }

  onClear() {
    this.sfForm.reset();
    this.editMode =false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy (){
    this.subscription.unsubscribe();
  }



}
