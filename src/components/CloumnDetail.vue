<template>
  <div class="container">
    <div class="item-container">
      <div class="row">
        <div class="col-2">
          <img :src="detailInfo.img"
               class="rounded img">
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-12">
              <h2>{{detailInfo.title}}</h2>
            </div>
            <div class="col-12 text-truncate"  style="width:700px">
              {{detailInfo.content}}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface DetailProps {
  title:string;
  img: string;
  content: string;
}

export default defineComponent({
  name: 'DetailItem',
  props: {
    detailInfo: {
      type: Object as PropType<DetailProps>,
      require: true
    }
  },
  setup() {
    return {
      
    }
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
