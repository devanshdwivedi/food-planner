import { TFoodItem } from '../interfaces/TFoodItem';
import { TMeal } from '../interfaces/TMeal';

export const getDefaultMeal = () => {
    const foodItem: TFoodItem = {
        name: 'Juice',
        calories: 100
      };
    const foodItem2: TFoodItem = {
        name: 'Kale',
        calories: 80
    };
    const foodItems = [foodItem, foodItem2];
    const meal: TMeal = {
        name: 'Breakfast',
        foodItems: foodItems
    };
    const foodItemLunch: TFoodItem = {
        name: 'Poha',
        calories: 120
      };
    const foodItemLunch2: TFoodItem = {
        name: 'Juice',
        calories: 40
    };
    const foodItemsLunch = [foodItemLunch, foodItemLunch2];
    const meal2: TMeal = {
        name: 'Lunch',
        foodItems: foodItemsLunch
    };
    return [meal, meal2];
};