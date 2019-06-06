import axios from 'axios';
// axios.defaults.headers.common['X-Requested-With'] =  'XMLHttpRequest'

const URL = "http://localhost:4567";

export const createRecipe = async (recipe) => {
    try{
        console.log(recipe)
        const newRecipe = await axios.post(`${URL}/recipes`, recipe)
        console.log(newRecipe.data, 'api helper')
        return newRecipe.data
        
    }
    catch(e){
        console.log(e.message)
    }
     
    
}

export const updateRecipe = async (recipe, id) => {
    try{
        const updatedRecipe = await axios.put(`${URL}/recipes/${id}`, recipe)
        console.log('updated recipe', updatedRecipe.data)
        return updatedRecipe.data
    }
    catch(e){
        console.log(e.message)
    }
}