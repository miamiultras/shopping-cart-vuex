import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: {
    fetchProducts (context) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          context.commit('setProducts', products)
          resolve()
        })
      })
    }
    // addToCart (context, product) {
    //   if (product.inventory > 0) {
    //     context.commit('pushProductToCart', product)
    //   } else {

    //   }
    // }
  },

  mutations: { // ala reducers, setting, updating the state
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})
