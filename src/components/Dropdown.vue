<template>
<div class="dropdown">
  <a @click.prevent="toggleOpen" class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
    欢迎你-{{title}}
  </a>

  <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
    <li><a class="dropdown-item" href="#">新建文章</a></li>
    <li><a class="dropdown-item" href="#">编辑资料</a></li>
  </ul>
</div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue'
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
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      toggleOpen
    }
  }
})
</script>

<style lang="" scoped>
  
</style>
