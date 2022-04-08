import {mount} from "@vue/test-utils";
import TodoList from "./TodoList.vue";

describe('todo-list', () => {
    it('adds a new todo-item to the list when I enter it in the input box and click on submit', async () => {
        const wrapper = mount(TodoList)

        await wrapper.find('input[name=new-item]').setValue("Do the dishes");

        await wrapper.find('button').trigger('click');

        expect(wrapper.find('ol').text()).toContain("Do the dishes");
    });

    it("displays multiple items when they are added in a sequence", async () => {
        const wrapper = mount(TodoList)

        await wrapper.find('input[name=new-item]').setValue("Do the dishes");
        await wrapper.find('button').trigger('click');


        await wrapper.find('input[name=new-item]').setValue("Another thing");
        await wrapper.find('button').trigger('click');

        expect(wrapper.find('ol').text()).toContain("Do the dishes");
        expect(wrapper.find('ol').text()).toContain("Another thing");
    })

    it("disables the add/submit button if the input is empty", async () => {
        const wrapper = mount(TodoList)

        await wrapper.find('input[name=new-item]').setValue("");
        expect(wrapper.find('button').element.disabled).toBe(true);

        await wrapper.find('input[name=new-item]').setValue("Do the dishes");
        expect(wrapper.find('button').element.disabled).toBe(false);
    });

    it.todo('strikes-out an item when its checkmark is checked');
});
