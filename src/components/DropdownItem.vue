<template>
  <li :class="{'is-disable':disabled}">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDown',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }

})
</script>

<style lang="scss" scoped>
  .is-disable {
    color: #6c758d;
    pointer-events: none;
    background-color: transparent;
  }
</style>
