<template>
  <div class="col pb-2">
    <div class="card h-100 " >
      <div class="d-flex justify-content-center align-item-center">
        <img :src="product.image" class="card-img-top" />
        <router-link :to="{ name: 'productDetails', params: { id: product._id }}">
          <div class="mask"></div>
        </router-link>
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.short }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>