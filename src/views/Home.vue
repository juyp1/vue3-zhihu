<template>
<div class="container">
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱</label>
      <validate-input :rules="emailRules" placeholder="请输入邮箱" type="text" v-model="emailval"></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input placeholder="请输入密码" :rules="passRules" type="password" v-model="passval"></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-label">角色</label>
      <Select :rules="selectRules" v-model="selectval" placeholder="请选择分类">
        <option :value="item.id" v-for="item in demodata" :key="item.id">{{item.name}}</option>

      </Select>
    </div>
    <template #submit>
      <span class="btn btn-danger">提交</span>
    </template>
  </validate-form>

</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import CloumnList, {
  ColumnProps
} from '../components/ColumnList.vue'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, {
  RulesProps
} from '../components/ValidateInput.vue'
import Select, {
  RulesProps as selectRulesProps
} from '../components/Select.vue'
const testData: ColumnProps[] = [{
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
    ValidateInput,
    Select,
    // CloumnList,
    ValidateForm
  },
  setup() {
    const emailval = ref('')
    const passval = ref('')
    const selectval = ref(0)
    const inputRef = ref < any > ()
    const demodata = ref([{
      id: 1,
      name: 'iphone4'
    }, {
      id: 2,
      name: 'iphone4s'
    }, {
      id: 3,
      name: 'iphone5'
    }, {
      id: 4,
      name: 'iphone5s'
    }])
    const selectRules: selectRulesProps = [{
      type: 'required',
      message: '请选择分类'
    }]
    const emailRules: RulesProps = [{
        type: 'required',
        message: '请输入电子邮箱'
      },
      {
        type: 'email',
        message: '电子邮箱格式错误'
      }
    ]
    const passRules: RulesProps = [{
      type: 'required',
      message: '请输入密码'
    }]
    const onFormSubmit = (result: boolean) => {
      console.log(result)
      // console.log('result', result)
    }
    return {
      emailval,
      passval,
      selectval,
      emailRules,
      passRules,
      inputRef,
      selectRules,
      testData,
      demodata,
      onFormSubmit
    }
  }
})
</script>
