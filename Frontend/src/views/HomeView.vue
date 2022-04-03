<template>
  <div class="home ">
    <div>
      <h3>CatNext</h3>
      <p>We are a company that specializes in accessories for cats. </p>
      <p>We only sell quality-assured goods that are produced sustainably. </p>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
        <div><router-link to="/products" class="btn btn-primary my-5">Go to products</router-link></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style>
img {
  height: 25em;
}
</style>