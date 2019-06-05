import axios from 'axios';

// const URL = "http://localhost:4567";

export const createRecipe = async recipe => {
    recipe.ingredients = ["sssss"]
    recipe.measurements = ["ggggg"]
    recipe.user_id = 1

    const res = await axios({
        method: 'post',
        url: 'http://localhost:4567/recipes',
        data: {recipe}
    })
    return res.data
}