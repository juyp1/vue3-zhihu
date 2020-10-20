<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">邮箱地址</label>
      <input type="email"
             class="form-control"
             id="exampleInputEmail1"
             v-model="emailRef.val"
            @blur="validateEmail"
             aria-describedby="emailHelp">
     <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">密码</label>
      <input type="password"
             class="form-control"
             id="exampleInputPassword1">
    </div>
    <div class="form-group form-check">
      <input type="checkbox"
             class="form-check-input"
             id="exampleCheck1">
      <label class="form-check-label"
             for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit"
            class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
const regTest = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

export default defineComponent({
  name: 'From',
  setup() {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '请输入邮箱'
      } else if (!regTest.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '邮箱格式错误'
      }
    }
    return {
      emailRef,
      validateEmail
    }
  }
})
</script>

<style lang="" scoped>
</style>
