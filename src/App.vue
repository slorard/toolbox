<template>
  <div id="app">
    <div id="content">
      <ToolCard tool-title="Memes" tool-link="https://github.com/slorard"/>
      <ToolCard tool-title="Download IG video" tool-link="https://github.com/slorard"/>
      <ToolCard tool-title="Clip YouTube" tool-link="https://github.com/slorard"/>
    </div>
  </div>
</template>

<script>
import ToolCard from "./components/ToolCard"  

export default {
  name: 'App',
  components: {
    ToolCard,
  }
}
</script>

<style>
  #content {
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
    grid-gap: 40px;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
  }
</style>
