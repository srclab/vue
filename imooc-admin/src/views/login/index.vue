<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" type="text"></el-input>
        <span class="show-pwd">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
      ></el-button>
    </el-form>
  </div>
</template>

<script>
import {} from '@element-plus/icons-vue'
import {} from 'vue'
</script>

<style></style>
