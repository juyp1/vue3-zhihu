<template>
<div>
  <textarea  :rows="row" class="form-control" :value="modelValue"  @blur="validateinput" :class="{'is-invalid':inputRef.error}" @input="inputvalue" v-bind="$attrs"></textarea>
  <div class="invalid-feedback" v-if="inputRef.error">{{inputRef.message}}</div>
</div>
</template>

<script lang="ts">
import {
  emitter
} from './ValidateForm.vue'
import {
  defineComponent,
  reactive,
  PropType,
  onMounted
} from 'vue'
 
interface ReleProp {
  type: 'required' | 'textarea';
  message: string;
}
export type RulesTextareaProps = ReleProp[];
export default defineComponent({
  name: '',
  props: {
    rules: Array as PropType < RulesTextareaProps > ,
    modelValue: String,
    row: Number

  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const validateinput = () => {
      let passed = true
      if (props.rules) {
        const allpass = props.rules.every(rule => {
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
           
            default:
              break
          }
          return passed
        })
        inputRef.error = !passed
        return allpass
      } else {
        return true
      }

      // if (inputRef.val.trim() === '') {
      //   inputRef.error = true
      //   inputRef.message = '请输入邮箱'
      // } else if (!regTest.test(inputRef.val)) {
      //   inputRef.error = true
      //   inputRef.message = '邮箱格式错误'
      // }
    }
    const inputvalue = (e: KeyboardEvent) => {
      const _inputvalue = (e.target as HTMLTextAreaElement).value
      inputRef.val = _inputvalue
      context.emit('update:modelValue', _inputvalue)
    }
    onMounted(() => {
      emitter.emit('foo', validateinput)
    })
    return {
      inputvalue,
      inputRef,
      validateinput
    }
  }

})
</script>

<style lang="" scoped>
</style>
