<template>
  <router-link :to="toolLink"  class="tool-card" rel="noopener noreferrer">
    <h1 style="margin: 0px; text-align: center">{{ toolTitle }}</h1>
  </router-link>
</template>

<script>
export default {
  name: "ToolCard",
  props: ["toolTitle", "toolLink"]
}
</script>

<style scoped>
  .tool-card {
    background-color: #009688;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 200px;
    max-width: 200px;
    height: 200px;
    justify-self: center;
    text-decoration: none;
  }

  .tool-card:hover {
    transform: scale(1.2);
  }
</style>