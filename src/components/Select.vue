<template>
  <div>
    <select v-bind="$attrs"
            class="selectpicker form-control"
            :class="{'is-invalid':selectRef.error}"
            @change="handleSelect"
            v-model="selectRef.val">
           <option value='' disabled selected style='display:none;'>{{placeholder}}</option>  
      <slot>请选择</slot>
    </select>
    <div class="invalid-feedback"
         v-if="selectRef.error">{{selectRef.message}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'

interface ReleProp {
  type: 'required';
  message: string;
}
export type RulesProps = ReleProp[];

export default defineComponent({
  name: '',
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
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
      if (e === undefined && selectRef.val === '') {
        selectRef.error = true
        if (props.rules) {
         props.rules.every((rule) => {
            selectRef.message = rule.message
          })
        }

        return true
      } else {
        selectRef.val = (e.target as HTMLSelectElement).value
        let passed = true
        if (props.rules) {
          const allpass = props.rules.every((rule) => {
            selectRef.message = rule.message

            switch (rule.type) {
              case 'required':
                passed = selectRef.val.trim() !== ''
                break
              default:
                break
            }
            return passed
          })
          selectRef.error = !passed

          context.emit('update:modelValue', selectRef.val)
          return allpass
        } else {
          return true
        }
      }
    }
    onMounted(() => {
      emitter.emit('foo', handleSelect)
    })

    return {
      selectRef,
      handleSelect
    }
  }
})
</script>

<style lang="" scoped>
</style>
