<template>
<GlobaHeader :user="User" />
<router-view />
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import GlobaHeader, {
  HeaderProps
} from './components/GlobalHeader.vue'

const User: HeaderProps = {
  isLogin: true,
  name: 'admin',
  id: 1

}
export default defineComponent({
  components: {
    GlobaHeader

  },
  setup() {
    return {
      User
    }
  }
})
</script>

<style lang="scss">

</style>
