<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div id="background">
  <video loop autoplay muted>
  <source src="../img/investigacao.mp4" type="video/mp4">
  </video>
</div>
</template>

<style>
body{
  background-color:rgb(173, 173, 173);
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
.sobrepor{
  
}
</style>

