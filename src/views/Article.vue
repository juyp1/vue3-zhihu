<template>
  <div class="container">
    <div>
      <validate-form @form-submit="handlesignin">
        <ValidateInput placeholder="请输入文章标题"></ValidateInput>
        <ValidateTextArea placeholder="请输入文章内容"  :rules="textareaRules" v-model="articletxt"
                          :row="10" />
        <template #submit>
          <span class="btn btn-danger">提交</span>
        </template>
      </validate-form>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import ValidateInput, { RulesProps } from '../components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateTextArea, {
  RulesTextareaProps
} from '@/components/ValidateTextArea.vue'
export default defineComponent({
  name: 'Article',
  components: {
    ValidateTextArea,
    ValidateInput,
    ValidateForm
  },
  setup() {
    const articletxt = ref('')
    const textareaRules: RulesTextareaProps = [
      {
        type: 'required',
        message: '请输入内容'
      }
    ]
    return {
      textareaRules,
      articletxt
    }
  }
})
</script>

<style lang="" scoped>
</style>
