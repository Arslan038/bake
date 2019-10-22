<template>
  <div class="home">
    <div class="container pt-5">
      <div class="row pt-5">
        <div class="col-md-12 text-center">
          <h1>
            Delegate to <span class="label-color">Bake'n'Rolls</span> - start <br/> earning Tezos today.
          </h1>
          <p class="mt-5">Welcome to Bake'n'Rolls - one of the first Tezos bakery. Our mission is to deliver <br> freshly baked pretzels on every cycle.</p>
          <p class="open mt-5 pt-5"><strong>We are open for additional. <span class="label-color">27,429 XTZ.</span></strong></p>
        </div>
      </div>
      <div class="row pb-3">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <b-progress :max="max" height="2rem" style="height:70px;border: 2px solid #fff; background:#fff; color: #7AC8ED;" variant="info" animated class="pr-2">
            <b-progress-bar :value="value">
              <h4 class="pt-3 code px-5">tz1NortRftucvAkD1J58L32EhSVrQEWJCEnB</h4>
            </b-progress-bar>
          </b-progress>
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-md-12">
          <button class="btn button mt-3 mr-2 ml-2" v-clipboard="() => url" v-clipboard:success="clipboardSuccessHandler">{{this.copyText}}</button>
          <button class="btn button mt-3 ml-2 mr-2">View On Tezblock</button>
        </div>
      </div>
    </div>
    <div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  
  data() {
    return {
      h: window.scrollY,
      copyText: 'Copy Address',
      url: 'tz1NortRftucvAkD1J58L32EhSVrQEWJCEnB',
      max: 100,
      value: 100
    }
  },
  methods: {
    clipboardSuccessHandler() {
      this.copyText = 'Copied'
      setTimeout(function() {
        this.copyText = "Copy Address";
        console.log(this.copyText)
      }, 2000);
    },
  },

  mounted: function() {
     window.addEventListener('scroll', function(){
      // this.h = window.scrollY;
      // var scrollPos = window.scrollY
      // var winHeight = window.innerHeight
      // var docHeight = document.documentElement.scrollHeight
      // var perc = 100 * scrollPos / (docHeight - winHeight)
      //console.log(this.$h.clientHeight)
      //console.log(this.h)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
    background: #778899;
    background: linear-gradient(0deg, #86939C 0%, #2C3E50 100%);
    text-align: center;
    /* margin-top: 88px !important; */
    min-height: calc(100vh) ;
}
.label-color {
  color: #7AC8ED;
}
h1 {
  color: #fff;
  line-height: 1.6;
  font-size: 50px;
}
p {
  font-size: 20px;
  color: #fff;
  line-height: 1.8;
}

.open {
  font-size: 1.5rem;
}

.code {
  font-weight: 550;
}

.button {
  background: #7AC8ED;
  color: #fff;
  border: 0;
  padding: 16px 32px;
  width: 290px;
  font-weight: 550;
  font-size: 20px;
  box-shadow: #2C3E50;
}

.button:hover {
  background: #63A5C4;
  color: #e9e9e9;
  border: 0;
  padding: 16px 32px;
}

</style>
