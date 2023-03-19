<template>
  <div id="app">
    <!-- <div class="container">
        
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <Navbar />
          </div><br><br>
          <div class="col-md-8">
            main
          </div>
          <div class="col-md-4">
            <Sidebar />
          </div>
        </div> 
      </div>
      <router-link v-bind:to="{path: '/Hi'}">Hello</router-link>
      
      <Footer />
      <h4>Test Project..!!</h4>
    </div> -->
    <div class="container-fluid clearfix">
      <Navbar />
        <br><br><br>
        <div class="row m-4 ">
            <div class="col-md-3">
                <Sidebar />
            </div>
            <div class="col-md-8 ">
              <router-view></router-view>
            </div>
        </div>
      <Footer />   
    </div>
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar'
import Sidebar from './components/partials/Sidebar'
import Footer from './components/partials/Footer'
export default {
  components: {
    Navbar, Sidebar, Footer
  },
  data() {
    return {
     
    }
  },
  methods: {
    
  },

}
</script>

<style>
.clearfix {
  overflow: auto;
}
</style>
