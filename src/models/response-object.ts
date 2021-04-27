export interface ResponseObject<T> {
    code: string;
    data: T;
    messages: string[];
    success: boolean;
}

export interface IResponseError<T> {
    response?: ResponseObject<T>;
}
