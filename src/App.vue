<template>
  <nav>
    <router-link to="/">Acceuil</router-link>
    <div>
      <router-link to="/curriculum">Moi</router-link>
      <router-link to="/projet">Mon travail</router-link>
      <router-link to="/portfolio">Mon univers</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
body {
  margin: 0;
  background-color: #111
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  color: #EEE;
  padding: 20px;
  margin: 15px 35%;
  background-color: #222;
  text-align: center;
  border-radius: 50px;
}

nav a {
  font-weight: bold;
  color: #AAA;
  text-decoration: none;
  margin: 5%;
}

nav a.router-link-exact-active {
  color: #FFF;
}

nav div {
  margin-top: 1%;
}

#CopyR {
  text-align: center;
  color: #DDD;
  font-family: Avenir, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 800;
  font-size: 0.8em;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #333;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #DDD;
  border-radius: 10px;
}

  @media screen and (max-width: 576px) and (min-width: 0px){
    nav {
      margin: 20px 20%;
    }

    nav div {
      display: flex;
      justify-content: center;
    }

    nav div a{
      margin: 2%;
    }

    #CopyR {
      font-size: 0.5em;
      margin: 2%;
    }
  }
  @media screen and (max-width: 768px) and (min-width: 577px){
    nav {
      margin: 20px 25%;
    }

    nav div {
      display: flex;
      justify-content: center;
    }

    nav div a{
      margin: 2%;
    }

    #CopyR {
      font-size: 0.6em;
      margin: 2%;
    }
  }
  @media screen and (max-width: 992px) and (min-width: 769px){
    nav {
      margin: 20px 33%;
      border-radius: 100px;
    }

    nav div {
      display: flex;
      justify-content: center;
    }

    nav div a{
      margin: 2%;
    }

    #CopyR {
      font-size: 0.7em;
      margin: 2%;
    }
  }
  @media screen and (max-width: 2560px) and (min-width: 1921px){
    nav {
      margin: 50px 35%;
      font-size: 2em;
      border-radius: 150px;
    }

    nav div {
      display: flex;
      justify-content: center;
    }

    nav div a{
      margin: 5%;
    }

    #CopyR {
      font-size: 1em;
      margin: 2%;
    }
  }
  @media screen and (max-width: 3840px) and (min-width: 2561px){
    nav {
      margin: 60px 35%;
      font-size: 3.5em;
      border-radius: 200px;
    }

    nav div {
      display: flex;
      justify-content: center;
    }

    nav div a{
      margin: 5%;
    }

    #CopyR {
      font-size: 1em;
      margin: 2%;
    }
  }
</style>
