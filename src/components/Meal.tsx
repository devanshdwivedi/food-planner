import { TFoodItem } from '@app/interfaces/TFoodItem';
import React from 'react';
import { TMeal } from '../interfaces/TMeal';
import FoodItemRow from './FoodItemRow';

export default function Meal({name, foodItems}: TMeal) {
  const foodTotal = foodItems.reduce((acc: number, item: TFoodItem) => acc + item.calories, 0);
  return (
      <div className="meal-container">
        <div className="meal-header">
          <h2>{name}</h2>
        </div>
        <div className="meal-body">
          <div className="meal-row-start">
            {
              foodItems && foodItems.map((foodItem: TFoodItem, index: number)=>{
                return <FoodItemRow id={foodItem.id} key={foodItem.name + index} name={foodItem.name} calories={foodItem.calories} />
              })
            }
          </div>
          <div className="meal-row-end">
            <div className="meal-total">Total calories: {` ${foodTotal}`}</div>
          </div>
        </div>
      </div>
  )
};
