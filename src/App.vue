<script setup></script>

<template>
    
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
    <div class="logo">
    <img  src="../src/img/logo.png" width=40%>
  </div>
    <button>iniciar sessão</button>
  </header>


  <main>
    <router-view />

<div class="sobre"></div>
  </main>

</template>

<style scoped>
header {
  font-family: sans-serif;
  height: 5rem;
  display: flex;
  background-color: rgba(0, 0, 0, 0.432);
  box-shadow: 5px -1px 10px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 1.3rem;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  position: absolute;
  left: 2rem; }

nav a {
  text-decoration: none;
  color: #ffffff;
  border: #030303;
  padding: 1.4rem;
}

.logo {
  right: 40%;
  position: absolute;
  transform: translateX(-50%); 
  width: 15%;
  max-width: 200px;  
}

button {
  position: absolute;
  right: 2rem;  
  background-color: #5a0c0c;
  color: rgb(255, 255, 255);
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
border-radius: 2rem;
}

button:hover {
  background-color: #ad1212;
}

.sobre {
  z-index: black;
}

</style>
