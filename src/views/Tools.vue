<template>
  <div id="content">
    <ToolCard tool-title="Memes" tool-link="/memes"/>
    <ToolCard tool-title="Download IG video" tool-link="/download-ig-video"/>
    <ToolCard tool-title="Clip YouTube" tool-link="/clip-youtube"/>
  </div>
</template>

<script>
  import ToolCard from "../components/ToolCard"
  import CustomCursor from "../components/CustomCursor"

  export default {
    name: 'Tools',
    components: {
      ToolCard,
      CustomCursor
    },
    mounted(){
      CustomCursor.methods.selectAllTagA()
    }
  }
</script>

<style>
  #content {
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
    grid-gap: 40px;
    justify-content: center;
    margin-top: 150px;
  }
</style>