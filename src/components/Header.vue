<template>
  <div id="header">
    <router-link to="/">
      Home
    </router-link>

    <router-link  to="/memes" v-show="notShowCurrentSectionBtn('/memes')">
      Memes
    </router-link>

    <router-link to="/download-ig-video" v-show="notShowCurrentSectionBtn('/download-ig-video')">
      Download IG video
    </router-link>

    <router-link to="/clip-youtube" v-show="notShowCurrentSectionBtn('/clip-youtube')">
      Clip YouTube
    </router-link>
  </div>
</template>

<script>
  import CustomCursor from "./CustomCursor";
  export default {
    components: {
      CustomCursor,
    },
    mounted() {
      console.log(this)
      CustomCursor.methods.selectAllTagA();
    },
    methods: {
      notShowCurrentSectionBtn(section){
        const currentSection = window.location.pathname;
        return section != currentSection;
      }
    }
  };
</script>


<style scoped>
  #header {
    position: relative;
    margin-left: auto;
    width: fit-content;
  }

  #header > * {
    margin-right: 10px;
    text-decoration: none;
    color: white;
  }
</style>