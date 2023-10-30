<template>
  <nav>
    <router-link to="/">Home</router-link>
    <div>
      <router-link to="/curriculum">Moi</router-link> -
      <router-link to="/projet">Mon travail</router-link> -
      <router-link to="/portfolio">Mon univers</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  color: #EEE;
  padding: 20px;
  margin: 0px 35%;
  background-color: #222;
  text-align: center;
  border-radius: 50px;
}

nav a {
  font-weight: bold;
  color: #AAA;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #FFF;
}

nav div {
  margin-top: 1%;
}
</style>
