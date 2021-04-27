export interface ILoginRequest {
    documentNumber: string;
}
export interface ILoginResponse {   
    id:string;
    documentNumber: string;
    name: string;
    last_name: string;
}
