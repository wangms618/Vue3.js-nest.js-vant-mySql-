import axios from '../axios'
export function getData() {
    return axios.get('/community/list')
}