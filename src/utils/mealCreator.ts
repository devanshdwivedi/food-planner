import { TFoodItem } from '../interfaces/TFoodItem';
import { TMeal } from '../interfaces/TMeal';

export const idGenerator = () => {
    return Date.now() + ( (Math.random()*100000).toFixed());
};

export const fillNewMeal = (mealName: string) => {
    const meal2: TMeal = {
        name: mealName,
        foodItems: [],
        id: idGenerator(),
    };
    return meal2;
};

export const getDefaultMeal = () => {
    const foodItem: TFoodItem = {
        name: 'Juice',
        calories: 100,
        id: idGenerator()
      };
    const foodItem2: TFoodItem = {
        name: 'Kale',
        calories: 80,
        id: idGenerator()
    };
    const foodItems = [foodItem, foodItem2];
    const meal: TMeal = {
        name: 'Breakfast',
        foodItems: foodItems,
        id: idGenerator()
    };
    const foodItemLunch: TFoodItem = {
        name: 'Poha',
        calories: 120,
        id: idGenerator()
      };
    const foodItemLunch2: TFoodItem = {
        name: 'Juice',
        calories: 40,
        id: idGenerator()
    };
    const foodItemsLunch = [foodItemLunch, foodItemLunch2];
    const meal2: TMeal = {
        name: 'Lunch',
        foodItems: foodItemsLunch,
        id: idGenerator()
    };
    return [meal, meal2];
};