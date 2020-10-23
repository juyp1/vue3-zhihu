<template>
  <div>
    <select class="selectpicker form-control"
            :class="{'is-invalid':selectRef.error}"
            @change="handleSelect"
            v-model="selectRef.val">
      <slot></slot>
    </select>
    <div class="invalid-feedback"
         v-if="selectRef.error">{{selectRef.message}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
interface ReleProp {
  type: 'required';
  message: string;
}
export type RulesProps = ReleProp[];

export default defineComponent({
  name: '',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProps>,
    modelValue: String
  },
  setup(props, context) {
    const selectRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const handleSelect = (e: MouseEvent) => {
      selectRef.val = (e.target as HTMLSelectElement).value
      let passed = true
      if (props.rules) {
        props.rules.every((rule) => {
          selectRef.message = rule.message

          switch (rule.type) {
            case 'required':
              console.log(selectRef.val.trim())
              passed = selectRef.val.trim() !== ''
              break
            default:
              break
          }
          return passed
        })
        selectRef.error = !passed
        context.emit('update:modelValue', selectRef.val)
      }
    }
    return {
      selectRef,
      handleSelect
    }
  }
})
</script>

<style lang="" scoped>
</style>
