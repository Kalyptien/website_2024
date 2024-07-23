<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <div>
      <router-link to="/hb">Evenement HB</router-link>
      <router-link to="/curriculum">Moi</router-link>
      <router-link to="/projet">Mon travail</router-link>
      <router-link to="/portfolio">Mon univers</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
@font-face {
  font-family: 'VLANÈLLA';
  src: url("@/assets/font/Vlanella_regular.otf") format("opentype");
  font-weight: 200;
}

@font-face {
  font-family: 'CovesB';
  src: url("@/assets/font/Coves Bold.otf") format("opentype");
}

@font-face {
  font-family: 'CovesL';
  src: url("@/assets/font/Coves Light.otf") format("opentype");
}

body {
  margin: 0;
  background-color: #111;
  background-image: url("@/assets/globalBackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#app {
  font-family: "CovesL";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  top: 0;
  z-index: 1;
  position: fixed;
  width: 100%;
  padding: 1%;
  color: #EEE;
  background-color: rgb(17, 17, 17, 0.9);
  display: flex;
  box-shadow: 0px 5px 10px rgb(17, 17, 17, 0.8);
}

nav div {
  display: flex;
  justify-content: end;
  width: 90%;
}

nav a {
  font-family: "CovesB";
  font-size: 1.2em;
  color: #AAA;
  text-decoration: none;
  margin: 0px 2%;
}

nav a:hover {
  color: #EEE;
}

nav a.router-link-exact-active {
  color: #FFF;
}

#CopyR {
  text-align: center;
  color: #DDD;
  font-family: "CovesL";
  font-style: italic;
  font-weight: 800;
  font-size: 0.8em;
}

/* Scroll bar */

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

@media screen and (max-width: 576px) and (min-width: 0px) {
  nav {
    padding: 3%;
  }

  nav div {
    width: 80%;
  }

  #CopyR {
    font-size: 0.5em;
    margin: 2%;
  }
}

@media screen and (max-width: 768px) and (min-width: 577px) {
  nav {
    padding: 2%;
  }

  nav div {
    width: 80%;
  }

  #CopyR {
    font-size: 0.6em;
    margin: 2%;
  }
}

@media screen and (max-width: 992px) and (min-width: 769px) {
  nav {
    padding: 2%;
  }

  nav div {
    width: 85%;
  }

  #CopyR {
    font-size: 0.7em;
    margin: 2%;
  }
}

@media screen and (max-width: 2560px) and (min-width: 1921px) {

  nav {
    font-size: 2em;
  }

  #CopyR {
    font-size: 1em;
    margin: 2%;
  }
}

@media screen and (max-width: 3840px) and (min-width: 2561px) {
  nav {
    font-size: 2.2em;
  }

  #CopyR {
    font-size: 1em;
    margin: 2%;
  }
}
</style>
