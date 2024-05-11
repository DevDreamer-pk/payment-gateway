import HTTPService from "../utility/httpService";

const httpService = new HTTPService('http://localhost:4000');

export const payment =  (data) => {
    return httpService.post(`/api/payment`,data );
}

