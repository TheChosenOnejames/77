<!--
 * @Description: 
 * @Author: shenxu
 * @Date: 2021-07-25 01:18:47
 * @LastEditors: shenxu
 * @LastEditTime: 2021-07-25 02:45:02
-->
<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号" v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.agree"
          >我同意此条款</el-checkbox
        ></el-form-item
      >
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mobile: "",
        code: "",
        agree: false
      }
    };
  }
};
</script>

<style lang="less" scoped></style>
