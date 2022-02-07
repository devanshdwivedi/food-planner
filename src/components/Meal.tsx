import { TFoodItem } from '@app/interfaces/TFoodItem';
import React from 'react';
import ReactModal from 'react-modal';
import { TMeal } from '../interfaces/TMeal';
import FoodAdder from './FoodAdder';
import FoodItemRow from './FoodItemRow';

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

export default function Meal({name, foodItems, addFoodItemCallback, id}: TMeal) {
  const foodTotal = foodItems.reduce((acc: number, item: TFoodItem) => acc + item.calories, 0);
  const [showFoodAdd, setShowFoodAdd] = React.useState<boolean>(false);
  return (
    <>
      <div className="meal-container">
        <div className="meal-header">
          <h2>{name}</h2>
          <button className='btn-primary' onClick={() => setShowFoodAdd(true)}>Add food</button>
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
      <ReactModal appElement={document.getElementById('root') || undefined} onRequestClose={() => setShowFoodAdd(false)} style={customStyles} isOpen={showFoodAdd} >
        <FoodAdder mealId={id} addFoodItemCallback={addFoodItemCallback} modalCloseCallback={() => setShowFoodAdd(false)} />
      </ReactModal>
    </>
  )
};
