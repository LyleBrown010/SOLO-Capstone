<template>
    <div class="single-view">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 flex" v-if="products">
      <div class="col flex" v-for="product in products" :key="product">
        <div class="card" id="test">
          <div class="img-bg">
          <img
            :src="product.productUrl"
            class="card-img-top img-fluid"
            id="image"
            :alt="product.productName"
          />
          </div>
          <div class="card-body">
            <div class="title">
              <h5 class="card-title">{{ product.productName }}</h5>
            </div>
            <div class="price">
    
              <p class="card-text"> R{{ product.productPrice }}</p>
            </div>
            <!-- <div class="button">
              <button @click="viewProduct(product.prodID)" class="btn">
                View Details
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products;
        }
    }, 

    mounted(){
        this.$store.dispatch("fetchProducts");
    }
}
</script>