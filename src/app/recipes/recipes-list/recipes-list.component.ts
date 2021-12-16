import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>();
  selectedRecipe: RecipeModel;
  recipes: RecipeModel[] = [
  ];

  constructor() {
    this.selectedRecipe = this.recipes[0];
  }

  ngOnInit(): void {
    this.dataStorageService.sendGetRequest('recipes')
      .subscribe((data: any[]=> {
        console.log(data);
    this.recipes = data as RecipeModel[];
    this.selectedRecipe = this.recipes[0];
  })
}
onRecipeSelected(recipe: RecipeModel) {
  this.recipeSelectedInList.emit()
}

}