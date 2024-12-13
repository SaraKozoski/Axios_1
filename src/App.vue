<script setup></script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
 
    <button class="login-button">Entrar</button>
  </header>


  <main>
    <router-view />


  </main>

</template>

<style scoped>

header {
  font-family: sans-serif;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.3rem;
  padding: 0 2rem;
  height: 10vh;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  position: absolute;
  left: 2rem; 
}

nav a {
  text-decoration: none;
  color: #ffffff;
  border: #030303;
  padding: 1.4rem;
}



button {
  position: absolute;
  right: 2rem;  
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;  background-color: rgba(0, 0, 0, 0.432);
border-radius: 2rem;
}



.login-button {
      font-size: 1rem;
      font-weight: bold;
      color: white;
      border: 2px solid white;
      border-radius: 4px;
      padding: 10px 20px;
      text-transform: uppercase;
      transition: background-color 0.3s, color 0.3s;
  margin: 10px;
    }

    .login-button:hover {
      border: 2px solid #ffe817;

      background-color: #ffe817;
      color: black;
    }
    body {
  min-height: 100vh;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  background: gray;
}
</style>
