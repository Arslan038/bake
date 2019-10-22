<template>
  <div class="home">
    <Navbar />
    <Header id="home"/>
    <Features id="features" />
    <Dashboard id="dashboard" />
    <Delegate id="delegate" />
    <FAQ id="faq" />
    <Contact id="contact" />
    <Footer id="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Features from '@/components/Features.vue'
import Dashboard from '@/components/Dashboard.vue'
import Delegate from '@/components/Delegate.vue'
import FAQ from '@/components/FAQ.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Header,
    Features,
    Dashboard,
    Delegate,
    FAQ,
    Contact,
    Footer
  }
}
</script>

<style scoped>

</style>
