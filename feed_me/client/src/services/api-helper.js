import axios from 'axios';

// const URL = "http://localhost:4567";

export const createRecipe = async recipe => {
    const res = await axios({
        method: 'post',
        url: 'http://localhost:4567/recipes',
        data: {recipe: recipe}
    })
    return res.data
}