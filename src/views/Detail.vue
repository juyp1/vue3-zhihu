<template>
  <div class="container">
     <div v-for="(item,index) of DetailData"
           :key="index">
        <CloumnDetail :detailInfo="item" />
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import CloumnDetail, { DetailProps } from '../components/CloumnDetail.vue'
export default defineComponent({
  name: 'Detail',
  components: {
    CloumnDetail
  },
  setup() {
    const store = useStore()
    const DetailData = store.state.DetailData
    return { DetailData }
  }
})
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  justify-content: center;
  padding: 30px;
  border-bottom: 1px solid #eeeeee;
}
.img {
  width: 120px;
  height: 120px;
}
</style>
