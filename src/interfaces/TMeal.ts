import { TFoodItem } from './TFoodItem';
export interface TMeal {
    name: string;
    foodItems: TFoodItem[];
    id: string;
    addFoodItemCallback?: any;
    removeMealCallback?: any;
}