<template>
  <div id="app">
    <router-view/>
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'app',
  components: {
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
