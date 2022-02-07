import { TFoodItem } from '@app/interfaces/TFoodItem';
import React from 'react';

export default function FoodItemRow({ name, calories, mealId, id, deleteFoodItem }: any) {
  return (
    <div className='food-item'>
      <div className="food-item-text">{name}</div>
      <div className="food-item-text">{calories + ' calories'}</div>
      <button className="btn-primary" onClick={() => deleteFoodItem(mealId, id)} style={{ margin: '8px' }}>Delete</button>
    </div>
  );
}
