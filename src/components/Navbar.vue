<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="" :class="getClass" fixed="top" v-b-scrollspy:nav-scroller>
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





        
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            scrollPosition: null,
            showNavbar: true,
            lastScrollPosition: 0
        }
    },
    methods: {
        scrollIntoView(evt) {
        evt.preventDefault()
        const href = evt.target.getAttribute('href')
        const el = href ? document.querySelector(href) : null
        if (el) {
          this.$refs.content.scrollTop = el.offsetTop
        }
      }
        
    },
    computed: {
        getClass: function() {
            
            return window.scrollY < 10 ? 'white' : 'transparent';
        }
    },
    
}
</script>

<style scoped>
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

/* .navbar.navbar-dark {
    background: transparent !important;
    width: 100%;
    max-width: 100% !important;
    color: gray;
} */

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

</style>
