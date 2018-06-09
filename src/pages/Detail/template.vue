<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar == null ? 'http://cn.gravatar.com/avatar/1?s=128&d=identicon' : user.avatar " alt="" class="avatar">
      <h3>{{title}}</h3>
      <p>
        <router-link to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{formatDate(createdAt)}}</p>
    </section>
    <section class="article" v-html="markdown">
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
