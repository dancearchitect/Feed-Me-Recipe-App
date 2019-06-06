import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] =  'XMLHttpRequest'

// const URL = "http://localhost:4567";

export const createRecipe = async recipe => {
    recipe.user_id = 1

    const res = await axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:4567/recipes',
        data: {recipe}
    })
    return res.data
}