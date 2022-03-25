import {flushPromises, mount} from "@vue/test-utils";
import LoginForm from '@/components/LoginForm.vue'
import {HttpClient} from "@/support/HttpClient";

describe('Login Form', () => {
    it('relays credentials to receive a bearer token from the api login route when the login button is pressed', async () => {
        let loginTokenReturnedFromTheBackend = "abc";
        HttpClient.prototype.post = jest.fn().mockReturnValue({data: {token: loginTokenReturnedFromTheBackend}});

        const wrapper = mount(LoginForm);

        let email = "foobar@gmail.com";
        let password = "secret";

        await wrapper.find('input[type=email]').setValue(email);
        await wrapper.find('input[type=password]').setValue(password);
        await wrapper.find('button[type=submit]').trigger('click');

        await flushPromises();

        expect(HttpClient.prototype.post).toHaveBeenCalledWith("api/login", {email, password})

        expect(window.localStorage.getItem("token")).toEqual(loginTokenReturnedFromTheBackend);
    });
});
