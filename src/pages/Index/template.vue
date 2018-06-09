<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in blogList" :key="blog.id" :to="`/detail/${blog.id}`">
          <figure class="avatar">
            <img :src="blog.user.avatar == null ? 'http://cn.gravatar.com/avatar/1?s=128&d=identicon' : blog.user.avatar " alt="">
            <figcaption>{{blog.user.username}}</figcaption>  
          </figure>
          <h3>{{blog.title}}<span>{{blog.updatedAt}}</span></h3>
          <p>{{blog.description == '' ? '暂时没有简介' : blog.description }}</p>
      </router-link>
      
      
    </section>
    <section class="page">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="onPageChange"></el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less"></style>
