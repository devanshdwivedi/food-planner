import { TFoodItem } from '@app/interfaces/TFoodItem';
import React from 'react';

export default function FoodItemRow({name, calories}: TFoodItem) {
  return (
    <div className='food-item'>
        <div className="food-item-text">{name}</div>
        <div className="food-item-text">{calories}</div>
    </div>
  );
}
