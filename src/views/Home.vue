<template>
  <div class="container">
    <CloumnList :list="testData"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CloumnList, { ColumnProps } from '../components/ColumnList.vue'
const testData: ColumnProps[] = [{
  id: 1,
  title: 'test1的专栏',
  description: '这是test1的专栏，有有点有意思的简介，可以更新一下哦',
  avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
}, {
  id: 2,
  title: 'test2的专栏',
  description: '这是test2的专栏，有有点有意思的简介，可以更新一下哦',
  avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
}, {
  id: 3,
  title: 'test3的专栏',
  description: '这是test3的专栏，有有点有意思的简介，可以更新一下哦',
  avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
}, {
  id: 4,
  title: 'test4的专栏',
  description: '这是test4的专栏，有有点有意思的简介，可以更新一下哦',
  avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
}]
export default defineComponent({
  name: 'Home',
  components: {
    CloumnList
  },
  setup () {
    return {
      testData
    }
  }
})
</script>
