<template>

  <div class="single-view">
    <div v-if="product" class="card">
      <div>
        <div class="image-section">
          <img id="image" :src="product.productUrl" :alt="product.productName" />
        </div>
        <h1 class="text-center">{{ product.productName }}</h1>
        <p class="fs-4">Category: {{ product.category }}</p>
        <p>{{ product.productDescription }}</p>
        <p class="fs-2">Price: R{{ product.productPrice }}</p>
        <button type="submit" @click="addToCart" id="btn">Add To Cart</button>
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
    },

    components: {
      Spinner
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: 'Lalezar', cursive;
}

#image{
  width: 50%;
  height: 50%;
}

#btn {
  background: black;
  color: #FFF9F0;
  border: 3px solid #FFF9F0;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

#btn:hover {
  background: black;
  color: #FFD700;
  box-shadow: 0 0 30px 5px #FFF9F0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>