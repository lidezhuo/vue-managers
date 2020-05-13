<template>
<div>
  <div class="login_container">
    <div class="login_box">
      <!--登录表达区域-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>
<style scoped lang="less">
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
    .login_box{
      width: 450px;
      height: 300px;
      background: #ffffff;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
