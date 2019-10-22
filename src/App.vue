<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');
#app {
    font-family: "Nunito",sans-serif !important;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    position: relative;
    height: 100%;
    background: #F8F8F8;
    scroll-behavior: smooth;
}
.text-primary {
  color: #7AC8ED;
}
:root {
  --danger: #7AC8ED;
}

@media (min-width: 1200px) {
    .container{
        max-width: 1300px !important;
    }
}

</style>
