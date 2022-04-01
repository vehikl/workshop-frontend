import {shallowMount} from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'
import {Item} from "@/types";

describe('ListItem.vue', () => {
  it('displays the description of the item', () => {
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

