<script>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/Footer.vue';

export default {
  name: "App",
  data() {
    return {
      
    }
  },
  components: {
    HeaderView: HeaderView,
    FooterView: FooterView
  }
}
  
</script>

<template>
  <div class="wrap">
    <HeaderView/>
    <div id="container">
      <router-view/>
    </div>
    <FooterView/>
  </div>
</template>

<style>
*{margin:0;padding:0;box-sizing:border-box;}
ul,li{list-style: none;}
html, body{height:100%;}
.wrap{display:flex;flex-direction: column;min-height:100vh;}
#container{flex:1 0 auto;padding-top:70px;}
</style>
