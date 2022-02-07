import { useEffect, useState } from 'react';
import { TMeal } from './interfaces/TMeal';
import { getDefaultMeal, fillNewMeal } from './utils/mealCreator';
import Meal from './components/Meal';
import ReactModal from 'react-modal';
import MealCreator from './components/MealCreator';
import { TFoodItem } from './interfaces/TFoodItem';
import { customStyles } from './utils/ModalBaseStyles';

export default function FoodPlanner(): JSX.Element {
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [showMealCreator, setShowMealCreator] = useState<boolean>(false);

  useEffect(() => {
    setMeals(getDefaultMeal());
  }, []);

  const successCallback = (newMealName: string) => {
    const newMeal = fillNewMeal(newMealName);
    setShowMealCreator(false);
    setMeals([newMeal, ...meals]);
  };

  const addFoodItemCallback = (mealId: string, foodItem: TFoodItem) => {
    const newMeals = meals.map((mealItem: TMeal) => {
      if (mealItem.id === mealId) {
        mealItem.foodItems.push(foodItem);
      }
      return mealItem;
    });
    setMeals(newMeals);
  };

  useEffect(() => {
    if (meals && meals.length > 0) {
      console.log('meals: ', meals);
    }
  }, [meals]);

  return (
    <>
      <h1 className="app-header">Food Planner</h1>
      <button className="btn-primary" onClick={() => setShowMealCreator(true)}>Add meal</button>
      {
        meals && meals.map((mealItem: TMeal, index: number) => {
          const { name, foodItems, id } = mealItem;
          return (
            <Meal addFoodItemCallback={addFoodItemCallback} id={id} key={index + '-meal-item'} name={name} foodItems={foodItems}></Meal>
          );
        })
      }
      <ReactModal appElement={document.getElementById('root') || undefined} onRequestClose={() => setShowMealCreator(false)} style={customStyles} isOpen={showMealCreator} >
        <MealCreator successCallback={successCallback} modalCloseCallback={() => setShowMealCreator(false)} />
      </ReactModal>
    </>
  );
}
