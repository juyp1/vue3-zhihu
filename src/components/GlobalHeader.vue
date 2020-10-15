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
      <DropDown :title="user.name">
          <DropDown-item :disabled="isdisbale"><a href="#" class="dropdown-item">新建文章</a></DropDown-item>
          <DropDown-item><a href="#" class="dropdown-item">编辑资料</a></DropDown-item>
          <DropDown-item><a href="#" class="dropdown-item">退出登录</a></DropDown-item>
      </DropDown>
    </li>

  </ul>
</nav>
</template>

<script lang="ts">
import DropDown from './Dropdown.vue'
import DropDownItem from './DropdownItem.vue'
import {
  defineComponent,
  PropType,
  ref
} from 'vue'
export interface HeaderProps {
  isLogin: boolean;
  name ? : string;
  id ? : number;
}
export default defineComponent({
  props: {
    user: {
      type: Object as PropType < HeaderProps >,
      require: true
    }
  },
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
  setup() {
    const isdisbale = ref(true)
    return {
      isdisbale
    }
  }
  
})
</script>

<style lang="" scoped>
</style>
