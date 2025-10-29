<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="logo"><router-link to="/">LOGO</router-link></h1>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/list">Menu1</router-link></li>
          <li><router-link to="/">Menu2</router-link></li>
          <li><router-link to="/">Menu3</router-link></li>
          <li><router-link to="/">Menu4</router-link></li>
        </ul>
      </nav>
      <div class="right-menu">
        <a href="#a">로그인</a>
        <a href="#a">마이페이지</a>
        <a href="#a">전체메뉴</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent"
}
</script>
<style>
  .header{position: fixed;width:100%;}
  .header-inner{position:relative;display:flex;justify-content: center;}
  .header h1{display:flex;align-items: center;position: absolute;left: 20px;height:100%;}
  .header nav > ul{display:flex;}
  .navbar{background-color: #000;;padding: 20px;text-align: center;}
  .navbar a{padding: 10px;text-decoration:none;color:#fff;}
  .right-menu{display:flex;align-items: center;position: absolute;height:100%;right: 20px;}
</style>