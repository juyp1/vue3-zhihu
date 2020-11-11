<template>
  <div class="container">
    <validate-form @form-submit="handlesignin">
      <div class="mb-3">
        <label class="form-label">邮箱</label>
        <validate-input :rules="emailRules"
                        placeholder="请输入邮箱"
                        type="text"
                        v-model="emailval"></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input placeholder="请输入密码"
                        :rules="passRules"
                        type="password"
                        v-model="passval"></validate-input>
      </div>
      <!-- <div class="mb-3">
        <label class="form-label">角色</label>
        <Select :rules="selectRules"
                v-model="selectval"
                placeholder="请选择角色">
          <option :value="item.id"
                  v-for="item in demodata"
                  :key="item.id">{{item.name}}</option>

        </Select>
      </div> -->
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProps } from '../components/ValidateInput.vue'
import Select, {
  RulesProps as selectRulesProps
} from '../components/Select.vue'

import { defineComponent, ref, onMounted } from 'vue'
const emailval = ref('')
const passval = ref('')
const selectval = ref('')
const inputRef = ref<any>()
const demodata = ref([
  {
    id: 1,
    name: 'iphone4'
  },
  {
    id: 2,
    name: 'iphone4s'
  },
  {
    id: 3,
    name: 'iphone5'
  },
  {
    id: 4,
    name: 'iphone5s'
  }
])
const selectRules: selectRulesProps = [
  {
    type: 'required',
    message: '请选择角色'
  }
]
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
const passRules: RulesProps = [
  {
    type: 'required',
    message: '请输入密码'
  }
]
const onFormSubmit = (result: boolean) => {
  console.log(result)
  // console.log('result', result)
}

export default defineComponent({
  name: 'Signin',
  components: {
    ValidateInput,
    Select,
    ValidateForm
  },
  setup() {
    const store = useStore()
    const handlesignin = () => {
      store.commit('login')
    }
    return {
      emailval,
      passval,
      selectval,
      emailRules,
      passRules,
      inputRef,
      selectRules,
      demodata,
      onFormSubmit,
      handlesignin
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
