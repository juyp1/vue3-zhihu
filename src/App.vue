<template>
<GlobaHeader :user="User" />
 
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

const User: HeaderProps = {
  isLogin: false,
  name: ''

}
export default defineComponent({
  components: {
    GlobaHeader

  },
  setup() {
   const store = useStore()
    return {
      User: store.state.user
    }
  }
})
</script>

<style lang="scss">

</style>
