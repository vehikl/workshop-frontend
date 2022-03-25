import axios, {AxiosInstance} from "axios";

export class HttpClient {
    protected client;

    constructor(baseClient?: AxiosInstance) {
        this.client = baseClient ?? axios.create({baseURL: process.env.API_URL});
    }

    get(url: string) {
        return this.client.get(url);
    }

    post(url: string, data?: any) {
        return this.client.post(url, data);
    }
}

const instance = new HttpClient();

export default instance;
