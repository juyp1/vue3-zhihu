<template>
  <div class="container">
    <!-- <CloumnList :list="testData"/> -->
    <validate-input  :rules="emailRules"></validate-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CloumnList, { ColumnProps } from '../components/ColumnList.vue'
import Form from '../components/From.vue'
import ValidateInput, { RulesProps } from '../components/ValidateInput.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，有有点有意思的简介，可以更新一下哦',
    avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，有有点有意思的简介，可以更新一下哦',
    avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏，有有点有意思的简介，可以更新一下哦',
    avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏，有有点有意思的简介，可以更新一下哦',
    avatar: 'http://chuantu.xyz/t6/741/1602483832x1031866013.png'
  }
]
export default defineComponent({
  name: 'Home',
  components: {
    ValidateInput
    // CloumnList,
    // Form
  },
  setup() {
    const emailRules: RulesProps = [
      {
        type: 'required',
        message: '请输入电子邮箱'
      },
      {
        type: 'email',
        message: '电子邮箱格式错误'
      }
    ]
    return {
      emailRules,
      testData
    }
  }
})
</script>
