<template>
<GlobaHeader :user="User" />
 <loader text="正在努力加载" v-if="store.state.loading"></loader>
<router-view />
</template>

<script lang="ts">
import { useStore } from 'vuex'
import {
  defineComponent
} from 'vue'
import GlobaHeader, {
  HeaderProps
} from './components/GlobalHeader.vue'
import Loader from './components/Loader.vue'
const User: HeaderProps = {
  isLogin: false,
  name: ''

}
export default defineComponent({
  components: {
    GlobaHeader,
Loader
  },
  setup() {
   const store = useStore()
    return {
      User: store.state.user,
      store
    }
  }
})
</script>

<style lang="scss">

</style>
