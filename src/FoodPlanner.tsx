import { useEffect, useState } from 'react';
import { TMeal } from './interfaces/TMeal';
import { TFoodItem } from './interfaces/TFoodItem';
import { getDefaultMeal } from './utils/mealCreator';
import Meal from './components/Meal';
import ReactModal from 'react-modal';

export default function FoodPlanner(): JSX.Element {
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [showMealCreator, setShowMealCreator] = useState<boolean>(false);

  useEffect(()=>{
    setMeals(getDefaultMeal());
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#c2e5c2'
    },
  };

  return (
    <>
      <h1 className="app-header">Food Planner</h1>
      <button className="btn-primary" onClick={() => setShowMealCreator(true)}>Add meal</button>
      {
        meals && meals.map((mealItem: TMeal, index: number)=>{
          const { name, foodItems } = mealItem;
          return (
            <Meal key={index + '-meal-item'} name={name} foodItems={foodItems}></Meal>
          );
        })
      }
      <ReactModal onRequestClose={() => setShowMealCreator(false)} style={customStyles} isOpen={showMealCreator} >
        Hello
      </ReactModal>
    </>
  );
}
