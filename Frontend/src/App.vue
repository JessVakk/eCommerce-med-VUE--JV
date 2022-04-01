<template>
  <Navbar />
  <div class="container mt-5">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>

<style>
.card-img-top {
   height: 15em;
}

</style>
