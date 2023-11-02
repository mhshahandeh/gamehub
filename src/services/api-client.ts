import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ca5478f184d941d682bca64fc29f6fff'
    }
})