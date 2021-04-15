<template>
  <div id="app">
    <router-link to="/"  id="home-btn"> 
      <img src="./assets/logo.png" alt="vue logo" width="50px" height="50px">
      Home
    </router-link>
    
    <router-view/>
  </div>
</template>

<script>
import ToolCard from "./components/ToolCard" 
export default {
  name: 'App',
  components: {
      ToolCard
  }
}
</script>

<style>
  h1 {
   color: white
  }

  #home-btn {
    color: white; 
    display: flex; 
    align-items: center; 
    text-decoration: none;
    height: 50px;
    width: 100px;

  }
</style>

