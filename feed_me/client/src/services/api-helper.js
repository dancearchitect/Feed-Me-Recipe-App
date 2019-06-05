import axios from 'axios';

const URL = "http://localhost:4567";

export const createRecipe = async recipeFormData => {
    try {
        const resp = await axios.post(`${URL}/`, recipeFormData);
        return resp.data;
      } catch (e) {
        console.log(e);
      }
    };