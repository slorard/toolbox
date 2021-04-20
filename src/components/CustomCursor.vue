<template>
    <div id="cursor"></div>
</template>

<script>
export default {
  name: "CursorCustom",
  mounted(){
    window.addEventListener("mousemove", this.cursorTracking);
    this.selectAllTagA();
  },
  methods: {
    cursorTracking(event){
      let cursor  = document.querySelector("#cursor");
      cursor.style.left = `${event.pageX}px`;
      cursor.style.top = `${event.pageY}px`;
    },
    selectAllTagA() {
      let elements = document.querySelectorAll("a");
      let cursor  = document.querySelector("#cursor");
      cursor.style.backgroundColor = "white"
      elements.forEach(element => {
        element.addEventListener("mouseover", () => {cursor.style.backgroundColor = "red"})
        element.addEventListener("mouseout", () => {cursor.style.backgroundColor = "white"})
      })
    }
  }
}
</script>

<style>
  * {
    cursor: none;
  }

  #cursor {
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
</style>