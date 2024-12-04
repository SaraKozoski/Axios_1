<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div id="background">
  <video loop autoplay muted>
  <source src="../img/investigacao.mp4" type="video/mp4">
  </video>
</div>

<main>

    <div class="form-container">
    <h1>CRIME NEWS</h1>
    <form action="/submit" method="POST">
      <img src="../img/feito2.png" alt="">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel esse voluptatum distinctio officiis aperiam voluptatem dolorum et. Corporis laborum maxime perspiciatis repellendus, natus cupiditate sit aperiam id. Reiciendis, placeat!
    </p>
    <button>começar</button>
    </form>
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
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60%;
}

    .form-container {
      margin-top: 5%;     
      margin-left: 130vh;
      background-color: #ffffff73;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      max-width: 400px;
    }

    .form-container h1 {
      color: red;
      text-align: center;
      margin-bottom: 20px;
    }
  
    .form-container input, .form-container textarea, .form-container button{
      width: 100%;
      padding: 20px;
      margin: 20px 0;
      border: 1px  #61090965;
      border-radius: 5px;
      box-sizing: border-box;
    }
</style>

