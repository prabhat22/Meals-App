
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAV, FILTERS } from '../actions/meal';
const initialState =
{
    meals: MEALS,
    filterMeals: MEALS,
    fav: []

}
const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            
            const existIndex = state.fav.findIndex(meal => meal.key === action.mealId);
            console.log("mea toggle red",existIndex)
            if (existIndex >= 0) {
                console.log("meal remove")
                const updateMeal = [...state.fav];
                updateMeal.splice(existIndex, 1);
                return { ...state, fav: updateMeal };
            }
            else {
                console.log('meal add');
                const meal = state.meals.find(meal => meal.key == action.mealId);
                return { ...state, fav: state.fav.concat(meal) };

            }
            case  FILTERS:
                {
                    const filterObject=action.filterObject;
                    const meals=state.meals.filter(meal=>
                        {
                            if(filterObject.isGlutenFree && !meal.isGlutenFree)
                            {
                                return false
                            }
                            if(filterObject.isLactoseFree && !meal.isLactoseFree)
                            {
                                return false
                            }

                            if(filterObject.isVegan && !meal.isVeganFree)
                            {
                                return false
                            }
                            if(filterObject.isVeg && !meal.isVegetarian)
                            {
                                return false
                            }
                            return true
                        })
                       return {...state,filterMeals:meals} 
                }
        default:
            {
                return state;
            }
    }

}
export default mealReducer;