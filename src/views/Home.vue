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
  <div>
    <a href="assitir previa"></a>
    <button>comecar</button>
  </div>
<div>
  <img src="../img/ilustracao.png" alt="">

</div>
</main>
</template>

<style>
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
  width: 100%;
  max-width: 570px;
}
.main_info  {
  margin: 100px ;
}
</style>

