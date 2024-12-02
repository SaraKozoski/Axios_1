<script setup></script>

<template>
    
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />

<div class="sobre"></div>
  </main>

</template>

<style scoped>

header {
  font-family:sans-serif;
  height: 5rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.3rem;
  align-items: center;
  justify-content: center;

}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
}

nav a {
  text-decoration: none;
  color: #ffffff;
  border: #ff0000;
  padding: 1.4rem;
 
}

.sobre{
  z-index: black;
}
</style>
