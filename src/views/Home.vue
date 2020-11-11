<template>
  <div class="container">
    <div class="cloumnList">
      <h2>我是Loading 😊 😊</h2>
       <CloumnList  :list="list"/>
    </div>
  </div>
</template>

<script lang="ts">
import _axios from 'axios'
import { useStore } from 'vuex'
import { defineComponent, onMounted, ref,reactive } from 'vue'
import CloumnList, { ColumnProps } from '../components/ColumnList.vue'
 
export default defineComponent({
  name: 'Home',
  
  components: {
    // ValidateInput,
    // Select,
    CloumnList
    // ValidateForm
  },
  setup() {
    const store = useStore()
    const list = store.state.columns
    const model = reactive({
      params: {
        currentPage: 1,
          pageSize: 10
      }
    })
    onMounted(() => { // C6A6C4086133360B
    console.log(store)
      store.dispatch('feachColumns',model.params)
    })
    return {
     list
    }
  }
})
</script>
<style lang="scss" scoped>
  .cloumnList {
    padding:30px
  }
</style>
