class Meal {
    constructor(
      key,
      categoryIds,
      title,
      affordability,
      complexity,
      imageUrl,
      duration,
      ingredients,
      steps,
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree
    ) {
      this.key = key;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.ingredients = ingredients;
      this.steps = steps;
      this.duration = duration;
      this.complexity = complexity;
      this.affordability = affordability;
      this.isGlutenFree = isGlutenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
    }
  }
  
  export default Meal;
  