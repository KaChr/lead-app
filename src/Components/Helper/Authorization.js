import axios from 'axios';

export const Authorization = () => {

    const token = localStorage.getItem('token');
    axios.post('http://localhost:7770/verify-token', null, {
        headers: {
            'Authorization': 'Bearer ' + token
        }

    })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

}