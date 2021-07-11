import axios from 'axios'

const url = 'http://localhost:8000'

export const authenticateSignUp = async (user: any) => {
    try {
        return await axios.post(`${url}/signup`, user)
    }
    catch (err){
        console.log('Error while calling signup ',err.message);
    }
}
