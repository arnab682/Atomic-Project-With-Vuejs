<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>-->
    <h2>Parent to child -> <b>{{ message }}</b></h2>
    <!-- <h2>Essential  <b>{{ sms }}</b></h2> -->
     <button @click="d" class="">+ add</button>
    <!--{{ d }} -->
    <button type="button" @click='passEvent'> Update me</button>
    <h2>Ecosystem</h2>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['message'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sms: 'Received Message'
    }
  },
  methods: {
    passEvent()
    {
      this.$emit('changeTitle', 'Awesome ')
    },
    d()
    {
      // console.log(this.sms)
      this.$emit('smsM', this.sms)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
