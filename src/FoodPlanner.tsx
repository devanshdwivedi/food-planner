import { useEffect, useState } from 'react';
import { TMeal } from './interfaces/TMeal';
import { TFoodItem } from './interfaces/TFoodItem';
import { getDefaultMeal } from './utils/mealCreator';
import Meal from './components/Meal';

export default function FoodPlanner(): JSX.Element {
  const [meals, setMeals] = useState<TMeal[]>([]);

  useEffect(()=>{
    setMeals(getDefaultMeal());
  }, []);

  return (
    <>
      <h1 className="app-header">Food Planner</h1>
      <button className="btn-primary">Add meal</button>
      {
        meals && meals.map((mealItem: TMeal, index: number)=>{
          const { name, foodItems } = mealItem;
          return (
            <Meal key={index + '-meal-item'} name={name} foodItems={foodItems}></Meal>
          );
        })
      }
    </>
  );
}
