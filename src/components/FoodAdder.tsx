import { TFoodItem } from '@app/interfaces/TFoodItem';
import { idGenerator } from '@app/utils/mealCreator';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

interface FoodAdderProps {
    modalCloseCallback: any;
    addFoodItemCallback: any;
    mealId: string;
}

export default function FoodAdder({ mealId, modalCloseCallback, addFoodItemCallback }: FoodAdderProps) {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting, isDirty, isValid} } = useForm({
      mode: 'onChange'
  });
  const onSubmit = (data: any) =>  {
      const newFoodItem: TFoodItem = {
          name: data.foodName,
          calories: parseInt(data.calories),
          id: idGenerator()
      };
      addFoodItemCallback(mealId, newFoodItem);
      modalCloseCallback();
  };
  return (
      <div style={{ minWidth: '300px' }}>
          <h4>Add a new food to the meal</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                <div>
                    <label>Food name</label>
                </div>
                <div>
                    <input {...register("foodName", { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                <div>
                    <label>Calories</label>
                </div>
                <div>
                    <input type="number" {...register("calories", { required: true })} />
                </div>
            </div>
            <div style={{ margin: '16px 0', display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn-primary" type="submit" disabled={!isValid} >Add</button>
                <button type="button" onClick={modalCloseCallback}>Cancel</button>
            </div>
          </form>
      </div>
  );
}
