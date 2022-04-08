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
    it.todo('rejects invalid items'); // What is invalid?  The button should be disabled
    it('removes a given item when the delete button of that item is clicked', async () => {
        const wrapper = mount(TodoList)

        expect(wrapper.find('li').exists()).toBeTruthy();
        await wrapper.find('li button').trigger('click');
        expect(wrapper.find('li').exists()).toBeFalsy();
    });

    it.todo('removes all items when the "clear" button is clicked');
    it.todo('submits a new item when ENTER is pressed while the input is on focus');
    it.todo('strikes-out an item when its checkmark is checked');

    describe('changing order of items', () => {
        it.todo('moves an item up by one when their up arrow is clicked.')
        it.todo('moves an item down by one when their down arrow is clicked.')
        it.todo('disables the up arrow for an item that is at the top of the list.')
        it.todo('disables the down arrow for an item that is at the bottom of the list.')
    });

    // TODO: Since we're following TDD, remember to see what can be clean-up while your tests are green.
    //      - For example, are there any variables we can extract?


});
