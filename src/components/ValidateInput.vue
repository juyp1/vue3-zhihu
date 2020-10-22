<template>
  <div>
    <input type="input"
           class="form-control"
           id="exampleInputinput1"
           v-model="inputRef.val"
           @blur="validateinput"
           :class="{'is-invalid':inputRef.error}"
            >
    <div class="invalid-feedback"
         v-if="inputRef.error">{{inputRef.message}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
const regTest = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
interface ReleProp {
  type: 'required' |'input'|'email';
  message: string;
}
export type RulesProps = ReleProp[];
export default defineComponent({
  name: '',
  props: {
    rules: Array as PropType<RulesProps>
  },
  setup(props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateinput = () => {
      let passed = true
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = regTest.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !passed
      }
     
      // if (inputRef.val.trim() === '') {
      //   inputRef.error = true
      //   inputRef.message = '请输入邮箱'
      // } else if (!regTest.test(inputRef.val)) {
      //   inputRef.error = true
      //   inputRef.message = '邮箱格式错误'
      // }
    }
    return {
      inputRef,
      validateinput
    }
  }
  
})
</script>

<style lang="" scoped>
</style>
