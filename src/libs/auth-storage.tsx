import { KEY_DATA_USER_NAME } from '../constants/static-values';
import { DataUser } from "../models";
const store = localStorage;

export default class AuthStorage {

    static setUser(user: DataUser) {
        store.setItem(KEY_DATA_USER_NAME, JSON.stringify(user));
    }

    static getUser() {
        const dataUserString = store.getItem(KEY_DATA_USER_NAME);
        const dataUser: DataUser = dataUserString ? JSON.parse(dataUserString) : new DataUser();
        return dataUser;
    }


    
}
