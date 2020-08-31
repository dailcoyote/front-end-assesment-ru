import axios from "axios";

class HttpService {
    constructor() {
        this.req = axios.create({
            baseURL: "https://bitbucket.org/ilakhmotkin/front-end-assesment-ru",
            headers: {
                "Content-type": "application/json"
            }
        })
    }
    json() {
        return this.req.get('/raw/a2d9baaa6d6cc27d988326b95ab8d702a357399a/server-response.json');
    }
}

export default new HttpService();