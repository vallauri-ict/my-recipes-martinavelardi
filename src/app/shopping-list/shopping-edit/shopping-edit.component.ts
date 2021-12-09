import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientModel } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  ingredientName: string = ''
  ingredientAmount: number = 0

  constructor() { }

  ngOnInit(): void {
  }
  addIngredient() {
    const newIngredient: IngredientModel = new IngredientModel(this.ingredientName, this.ingredientAmount)
    this.ingredientAdded.emit(newIngredient)
  }
  clear() {

  }
}
