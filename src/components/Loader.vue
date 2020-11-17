<template>
  <Teleport to="#back">
    <div class="d-flex justify-content-center align-items-cneter h-100 loading-container loading-content"
         :style="{background:color||''}">
      <div>
        <div class="spinner-border text-warning"
             role="status">

        </div>
        <p v-if="text"
           class="text-primary small">{{text||'loading'}}</p>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
export default defineComponent({
  name: 'Loader',
  props: {
    text: {
      type: String
    },
    color: {
      type: String
    }
  },
  setup() {
    const node = document.createElement('div')
    node.id = 'back'
    document.body.appendChild(node)
    onUnmounted(() => {
      document.body.removeChild(node)
    })
    return {}
  }
})
</script>

<style lang="scss" scoped>
.loading-container {
  background-color: rgba(255, 2555, 255, 0.5);
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
}
.loading-content {
  display: flex;
  align-items: center;
}
</style>
