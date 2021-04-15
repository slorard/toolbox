<template>
    <a class="tool-card" :href="toolLink" target="_blank" rel="noopener noreferrer">
        <h1 style="margin: 0px; text-align: center">{{ toolTitle }}</h1>
    </a>
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
        width: 250px;
        max-width: 250px;
        height: 250px
    }

</style>