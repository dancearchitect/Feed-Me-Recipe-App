import axios from 'axios';

// const URL = "http://localhost:4567";

export const createRecipe = async newrecipe => {
    const res = await axios({
        method: 'post',
        url: 'http://localhost:4567/recipes',
        data: {recipe: newrecipe}
    })
    return res.data
}