<template>
  <div id="app">
    <router-view/>
    <CustomCursor/>
  </div>
</template>

<script>
  import CustomCursor from "./components/CustomCursor"

  export default {
    name: 'App',
    components: {
      CustomCursor
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

