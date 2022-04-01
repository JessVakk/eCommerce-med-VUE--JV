<template>
  <form class="border p-3 shadow rounded" @submit.prevent="handleSubmit">
    <h2 class="text-center">Register</h2>
  <!-- Email input -->
  <div class=" mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" v-model="email" />
  </div>

  <!-- Password input -->
  <div class=" mb-4">
    <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" v-model="password" />
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Register</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Already a member? <a href="./Login">Login</a></p>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    async handleSubmit() {
      if(this.email.trim() === '' || this.password.trim() === '') {
        return
      }

      let user = {
        email: this.email,
        password: this.password
      }
        let route = this.$route.query.redirect
        this.register({user, route})
    }
  }

}
</script>

<style>

</style>