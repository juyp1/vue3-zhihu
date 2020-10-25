<template>
<form class="valide">
  <slot name="default"></slot>
  <div class="submit-area" @click.prevent="submitForm">
    <slot name="submit">
      <button type="submit" class="btn btn-primary">提交</button>
    </slot>
  </div>
</form>
</template>

<script lang="ts">
import {
  defineComponent,
  onUnmounted

} from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean;
export const emitter = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    const callback = (func: any) => {
      funcArr.push(func)
    }
    emitter.on('foo', callback)

    onUnmounted(() => {
      emitter.off('foo', e => console.log('foo2', e))
      funcArr = []
    })

    return {
      funcArr,
      submitForm
    }
  }

})
</script>

<style lang="scss" scoped>
</style>
