import {api} from '../api'

class UserDataApi  {
  static async getAll() {
    return await api.get(ROUTE);
}

static async getId(id) {
    return await api.get(`${ROUTE}/${id}`);
}

static async post(param) {
    return await api.post(ROUTE, param);
}

static async delete(id) {
    return await api.delete(`${ROUTE}/${id}`);
}

static async put(id, param) {
    return await api.put(`${ROUTE}/${id}`, param);
}
}

const BASE_API = " https://60831bd35dbd2c001757b2c7.mockapi.io/api/";
const ROUTE = `${BASE_API}users`;

export { UserDataApi };
