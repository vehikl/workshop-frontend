import {shallowMount} from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'
import {Item} from "@/types";

describe('ListItem.vue', () => {
  it('renders item description when passed', () => {
    const item: Item = {
      id: 1234,
      description: "Do the dishes"
    }

    const wrapper = shallowMount(ListItem, {
      props: {item}
    })

    expect(wrapper.text()).toMatch(item.description)
  })
})

