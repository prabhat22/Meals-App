export const TOGGLE_FAV='Toggle_Fav';
export const FILTERS='FILTER_MEALS'
export const toggle_fav=(id)=>
{
return {type:TOGGLE_FAV,mealId:id}
}
export const filter_meal=(filterObject)=>
{
    return {type:FILTERS,filterObject:filterObject};
}