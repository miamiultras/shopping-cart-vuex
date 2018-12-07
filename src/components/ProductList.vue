<template>
  <div>
    <h1>Product List</h1> 
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="(product, index) in products" :key="index">
        {{product.title}} - {{product.price}} - {{product.inventory}}
        <button @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

  data () {
    return {
      loading: false
    }
  },

  computed: {
    products () {
      return this.$store.getters.availableProducts
    }
  },

  methods: {
    addProductToCart (product) {
      this.$store.dispatch('addProductToCart', product)
    }
  },

  created () {
    this.loading = true
    this.$store.dispatch('fetchProducts')
      .then(() => { this.loading = false })
  }
}
</script>
