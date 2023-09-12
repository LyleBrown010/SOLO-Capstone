<template>

  <div class="single-view">
    <div v-if="product" class="card">
      <div>
        <div class="image-section">
          <img :src="product.productUrl" :alt="product.productName" />
        </div>
        <h1 class="text-center">{{ product.productName }}</h1>
        <p class="fs-4">Category: {{ product.category }}</p>
        <p>{{ product.productDescription }}</p>
        <p class="fs-2">Price: R{{ product.productPrice }}</p>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerComp.vue'
export default {
    computed: {
        product(){
            return this.$store.state.selectedProduct
        }
    }
}
</script>