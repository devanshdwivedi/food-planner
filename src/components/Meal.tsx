import { TFoodItem } from '@app/interfaces/TFoodItem';
import React from 'react';
import { TMeal } from '../interfaces/TMeal';

export default function Meal({name, foodItems}: TMeal) {
  const foodTotal = foodItems.reduce((acc: number, item: TFoodItem) => acc + item.calories, 0);
  return (
      <div className="meal-container">
        <div className="meal-header">
          <h2>{name}</h2>
        </div>
        <div className="meal-body">
          <div className="meal-row-start">
          </div>
          <div className="meal-row-end">
            <div className="meal-total">Total calories: {` ${foodTotal}`}</div>
          </div>
        </div>
      </div>
  )
};
