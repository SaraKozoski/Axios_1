<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div id="background">
  <video loop autoplay muted>
  <source src="../img/investigacao.mp4" type="video/mp4">
  </video>
</div>

<main>
  <div class="main_info">
    <img src="../img/feito2.png" alt="">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel esse voluptatum distinctio officiis aperiam voluptatem dolorum et. Corporis laborum maxime perspiciatis repellendus, natus cupiditate sit aperiam id. Reiciendis, placeat!
    </p>
  </div>

  <div class="button">
    <a href="assitir previa"></a>
    <button>comecar</button>
  </div>
<div>

</div>
</main>

<div class="opacidade"></div>
</template>

<style>

.opacidade {
  position: fixed;
  top: 8vh;
  left: 0;
  width: 100vw;
  height: calc(80vw);
  z-index: 10;
  background-color: #00000055;
}
body{
  background-color:rgb(173, 173, 173);
  margin: 0; 
  padding: 0; 
}

#background {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
}
#background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#background::after{
  content: '';
  width: inherit;
  height: inherit;
  position: fixed;
  inset: 0;
}
main{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
}
.main_info{
  height: 100%;
  margin: 0;
 display: flex;
  justify-content: center;
  align-items: center;
}

.main_info p {
  margin-left: 20%;
  font-size: 1.5rem;  
  height: 100%;

 display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60%;
}

</style>

