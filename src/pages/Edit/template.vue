<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" clearable maxlength='30'></el-input>
    <p class="msg">{{this.title.length}} / 限 30 个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="description" maxlength='60'></el-input>
    <p class="msg">{{this.description.length}} / 限 60 个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 20}" v-model="content" maxlength='20000'></el-input>
    <p class="msg">{{this.content.length}} / 限 20000 个字</p>
    <p>
      <label>是否显示在首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onSave">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
