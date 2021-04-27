import { apiUrl } from "../constants/static-config";
import { stringify } from "querystringify";
import { ajax } from "rxjs/ajax";

interface IParams{
    host?: string;
}

interface IGetParams extends IParams{
    params?:any;
}

interface IPostParams extends IParams{
    data?:any;
}

class Api {

    static getUrl(url:any, host:any) {
        return `${host}/${url}`;
    }
    static getHeader() {
        const header: { "Content-Type": string, Accept: string } = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };

        return header;
    }
    
    static getJSON(
        url:string,
        {
            params = {},
            host = apiUrl,

        }: IGetParams
    ) {
        
        return ajax.getJSON(
            Api.getUrl(`${url}?${stringify(params)}`, host));
    }
    static get(
        url:string,
        {
            params = {},
            host = apiUrl,
        }:IGetParams
    ) {
        
        return ajax.get(
            Api.getUrl(url, host));
    }
    static post(
        url:string,
        {
            data = {},
            host = apiUrl,
        }:IPostParams
    ) {
        return ajax.post(
            Api.getUrl(`${url}`, host),
            (data));
    }
}
export default Api;
