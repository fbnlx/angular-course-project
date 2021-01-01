import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Galuska',
      'Finom magyaros galuskatészta',
      'https://www.mindmegette.hu/images/111/O/123728_galuska-nokedli-csipetke-600-201510171451.jpg',
      [new Ingredient('répa', 3), new Ingredient('retek', 2)]
    ),
    new Recipe(
      'Elfogadható galuska',
      'Nem rossz, nem túl jó',
      'https://www.mindmegette.hu/images/111/O/123728_galuska-nokedli-csipetke-600-201510171451.jpg',
      [
        new Ingredient('krumpli', 2),
        new Ingredient('tészta', 4),
        new Ingredient('szalonna', 23),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addRecipeIngredients(ingredients);
  }
}
