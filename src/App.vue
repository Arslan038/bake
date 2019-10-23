<template>
  <div id="app">
    <!-- <div class="container-fluid"> -->
      <div id="nav">
          <Navbar  style="height:4rem;"/>

        </div>

    <!-- </div> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <Navbar /> -->
    <router-view/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navbar
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  position: relative;
  top: 0;
  left: 0;
  max-width: 100vw;
  min-height: 200vh;
  margin: 0px;
  padding: 0px;
  border: 0px;
}
body {
  padding: 1.7vmin;
  font-size: 16px;
  font-family: sans, sans-serif;
  color: #333;
}

a {
  color: inherit;
  font-style: italic;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 3em;
  width: 100%;
  background-color: #EEE;
  box-sizing: border-box;
  padding: 12px 18px;
  box-shadow: 0px 4px 7px #777;
  transition: background-color 0.4s ease-out;
}

nav span {
  font-weight: 600;
  letter-spacing: .085em;
}

nav button {
  position: absolute;
  top: 0;
  transform: translateY(50%);
  right: 0;
  min-height: 1.5em;
  min-width: 80px;
  background-color: #eee;
  color: #222;
  border: 0px;
  border-radius: 2px;
  margin-right: 18px;
  text-transform: uppercase;
}

nav.scroll {
  background-color: #A1572F;
  color: #eef;
}

body > header {
  margin-top: 4.7em;
}

</style>
