<template>
<nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="#">防知乎</a>
  <ul class="list-inline mb-0" v-if="!user.isLogin">
    <li class="list-inline-item">
      <a href="#" class="btn btn-outline-light my-2">登陆</a>
    </li>
    <li class="list-inline-item">
      <a href="#" class="btn btn-outline-light my-2">注册</a>
    </li>
  </ul>
  <ul class="list-inline mb-0" v-else>
    <li class="list-inline-item">
      <DropDown :title="user.name" />
    </li>

  </ul>
</nav>
</template>

<script lang="ts">
import DropDown from './Dropdown.vue'
import {
  defineComponent,
  PropType
} from 'vue'
export interface HeaderProps {
  isLogin: boolean;
  name ? : string;
  id ? : number;
}
export default defineComponent({
  props: {
    user: {
      type: Object as PropType < HeaderProps > ,
      require: true
    }
  },
  name: 'GlobalHeader',
  components: {
    DropDown
  }
})
</script>

<style lang="" scoped>
</style>
