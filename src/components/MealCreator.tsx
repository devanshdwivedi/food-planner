import React, { useState } from 'react';
import { useForm } from "react-hook-form";

interface MealCreatorProps {
    modalCloseCallback: any;
    successCallback: any;
}

export default function MealCreator({modalCloseCallback, successCallback}: MealCreatorProps) {
  const { register, handleSubmit, watch, formState: { errors , isSubmitting, isDirty, isValid} } = useForm({
      mode: 'onChange'
  });
  const onSubmit = (data: any) =>  {
      successCallback(data['mealName']);
  };
  return (
      <div style={{ minWidth: '300px' }}>
          <h4>Add a new meal</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <label>Meal name</label>
                </div>
                <div>
                    <input {...register("mealName", { required: true })} />
                </div>
            </div>
            <div style={{ margin: '16px 0', display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn-primary" type="submit" disabled={!isValid} >Create</button>
                <button type="button" onClick={modalCloseCallback}>Cancel</button>
            </div>
          </form>
      </div>
  );
}
