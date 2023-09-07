<template>
  <div v-if="products">
    <div v-for="product in products" :key="product" :product="product">
      <div class="card">
        <div class="img">
          <img :src="product.productUrl" :alt="product.productName" class="img-fluid" id="image"/>
        </div>
        <div>
          <h2>{{product.productName}}</h2>
          <p>{{product.productPrice}}</p>
        </div>
        <div>
          <button @click="viewDetails(product.prodID)" class="btn">View Details</button>
        </div>
      </div>

    </div>

  </div>
  <div v-else> 
    loadingggggggg
  </div>
</template>

<script>
export default {
  props: ["product"], 

  computed:{
      products(){
        return this.$store.state.products;
      }
  }, 

  mounted(){
    this.$store.dispatch("fetchProducts");
  }, 

  methods:{
    viewDetails(prodID){
      const selectedProduct = this.products.find((product) => product.product.prodID === prodID);

      this.$store.commit("setSelectedProduct", selectedProduct);
      this.$router.push({name: "single product", params: {prodID: prodID}});
    }
  }
}
</script>