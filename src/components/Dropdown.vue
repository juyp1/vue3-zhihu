<template>
<div class="dropdown" ref="dropdownRef">
  <a @click.prevent="toggleOpen" class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
    欢迎你-{{title}}
  </a>

  <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
   <slot></slot>
  </ul>
</div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted,
  onUnmounted,
  watch
} from 'vue'
import userClickOutside from '../hooks/userClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null|HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    
    const isClickOutside = userClickOutside(dropdownRef)
   
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style lang="" scoped>
  
</style>
