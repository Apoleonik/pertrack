<template>
  <el-container>
    <el-header class="main-header">
      <el-menu mode="horizontal">
        <el-menu-item> Pertrack </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-main class="main-container">
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.main-container {
  margin: 0 auto;
  max-width: 1280px;
}
</style>
