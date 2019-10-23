<template>
    <!-- :class="[backgroundss]" -->
     <b-navbar toggleable="lg" type="dark" variant=""  :class="getClass"   fixed="top" v-on:scroll.passive='handleScroll'>
            <div class="container">
                <b-navbar-brand href="http://localhost:8080/#home" class="py-2 px-4">
                    <img src="../../public/logo.png" width="56" alt="">
                    <span class="title">Bake'n'Rolls</span>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="left" style="float: left; text-align:left;color:#000;">
                        <b-nav-item class="active" href="http://localhost:8080/#home">Home</b-nav-item>
                        <b-nav-item href="http://localhost:8080/#features">Features</b-nav-item>
                        <b-nav-item href="http://localhost:8080/#dashboard">Dashboard</b-nav-item>
                        <b-nav-item href="http://localhost:8080/#delegate">How To Delegate</b-nav-item>
                        <b-nav-item href="http://localhost:8080/#faq">FAQ</b-nav-item>
                        <b-nav-item href="http://localhost:8080/#contact">Contact Us</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>    
        </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return{
      backgroundss:'white',
      scrolls:0
    }
  },
  computed:{
    getClass: function() {
            
            return this.scrolls > 100 ? 'white' : 'transparent';
    }
  },
  methods: {
    handleScroll (event) {
      console.log("coming boiiii")
      console.log(window.scrollY)
      this.scrolls=window.scrollY
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>


<style>
#op{
  
  background-color:grey;
}
#nav-collapse {
    
    margin-left: 40px;
}

a.nav-link {
    font-size: 16px;
    
    margin-left: 40px;
    color: gray !important;
}

a.nav-link:hover {
    color: #7AC8ED !important;
}

a.nav-link:active {
    color: #7AC8ED !important;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.navbar {
    
    width: 99vw !important;
}
.navbar .navbar-brand {
    color: #7AC8ED !important;
    font-weight: 700;
    font-size: 1.5rem;
    padding-left: 20px;
}
.navbar.navbar-dark .navbar-brand div {
    background-image: url('../../public/logo.png');
}
.title {
    margin-left: 10px;
}

.white {
    background-color: #fff !important;
}

.transparent {
    background-color: transparent !important;
}

</style>


