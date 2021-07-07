import axios from 'axios';

const api = axios.create({
  baseURL:" https://60831bd35dbd2c001757b2c7.mockapi.io/api/"
})

export {api}