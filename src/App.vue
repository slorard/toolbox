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
</style>

