

<template>
  <div id="content">
        <input type="file" id="input-upload" style="display: none;">
        <input type="button" id="input-download" style="display: none;"/>

        <div>
          <a id="upload-image" class="input-stylized">Seleccionar Imagen</a>
          <a id="download-image" class="input-stylized" >Descargar</a>
          <a id="cut-image" class="input-stylized" >Recortar</a>
        </div>

        <div id="content-meme">
          <img  id="imagen"/>
        </div>
  </div>
</template>


<script>
  import domtoimage from 'dom-to-image';

  export default {
    mounted(){
      const inputUploadImage = document.querySelector("#input-upload");
      const inputDownloadImage = document.querySelector("#input-download");
      const btnUploadImage = document.querySelector("#upload-image");
      const btnDownloadImage = document.querySelector("#download-image");
      const btnCutImage = document.querySelector("#cut-image");

      inputUploadImage.addEventListener("change", this.getBase64)
      inputDownloadImage.addEventListener('click', this.downloadImage);
      btnUploadImage.addEventListener('click', () => inputUploadImage.click())
      btnDownloadImage.addEventListener('click', () => inputDownloadImage.click())
      btnCutImage.addEventListener('click', this.cutImagen)
    },
    methods: {
      renderImage(base64) {
        document.querySelector("#imagen").setAttribute("src", base64);
      },
      getBase64(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (e) => this.renderImage(e.target.result);
      },
      downloadImage(){
        const contentMeme = document.querySelector("#content-meme");
        domtoimage.toPng(contentMeme)
          .then(function(dataUrl) {
            const downloadLink = document.createElement("a");
            downloadLink.href = dataUrl;
            downloadLink.download = "ss";
            downloadLink.click();
          })
          .catch(function(error) {
            console.error('oops, something went wrong!', error);
          });
      },
      cutImagen(){
        console.log("ss")
      }
    }
  }
</script>

<style scoped>
  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  #btn {
    margin-bottom: 20px;
  }

  #content-meme{
    /* background-color: #fff; */
    margin-top: 50px;
  }

  .input-stylized {
    background-color: #009688;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
  }
</style>