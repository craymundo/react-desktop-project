import { getAllMenu,addMenu } from "../constants/api.routes";
import Api from "./api";

export default class OperationsApi {
    static getAllMenu() {
        return Api.get(getAllMenu, {params: {}});
    }

    static addOperation(menuId: string, userId: string ) {
        const menu = {
            menuId: menuId,
            customerId: userId,
        }
        return Api.post(addMenu, { data: menu });
    }
}
