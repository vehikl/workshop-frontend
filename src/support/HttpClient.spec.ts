import axios from "axios";
import {HttpClient} from "@/support/HttpClient";

jest.mock('axios');

describe('HttpClient', () => {
    it('uses the API_URL from the environment as the base for the requests', () => {
        const baseURL = "http://localhost:9000";
        process.env.API_URL = baseURL;
        new HttpClient();
        expect(axios.create).toHaveBeenCalledWith(expect.objectContaining({baseURL}));
    });
});
