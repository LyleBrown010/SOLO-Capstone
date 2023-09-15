<template>
  <div class="background">
    <div class="row" id="top">
      <div class="col-3 text-center" id="custom">
        <button @click="sortPrice" id="btn">SORT BY PRICE</button>
        <button @click="sortName" id="btn">SORT BY NAME</button>
      </div>
      <div class="col-6 text-center" id="custom">
        <input type="text" v-model="search" placeholder="search" />
      </div>
      <div class="col-3 text-center text-black" id="custom">
        <select v-model="category">
          <option value="All">All</option>
          <option value="Modern">Modern</option>
          <option value="Oil">Oil</option>
          <option value="Classic">Classic</option>
        </select>
      </div>
      
    </div>
    <br>

    
      
    <div v-if="products" class="product">
    <div v-for="product in products" :key="product" :product="product">
      <div class="card">
        <div class="img text-center">
          <img :src="product.productUrl" :alt="product.productName" class="img-fluid" id="image"/>
        </div>
        <div>
          <h2 class="text-center p-2">{{product.productName}}</h2>
          <p class="">R {{product.productPrice}}.00</p>
        </div>
        <div>
          <button @click="viewDetails(product.prodID)" class="btn" id="btn">View Details</button>
        </div>
      </div>

    </div>

  </div>
  <div v-else> 
    <spinner-comp/>
  </div>
  </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue';
export default {
  components: { SpinnerComp },
  props: ["product"], 
  data() {
    return {
      search: "",
      category: "All",
    };
  },
  computed:{
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.productName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (this.category !== "All" && this.category !== product.category) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },

  mounted(){
    this.$store.dispatch("fetchProducts");
  }, 

  methods:{
    viewDetails(prodID){
      const selectedProduct = this.products.find((product) => product.prodID === prodID);

      this.$store.commit("setSelectedProduct", selectedProduct);
      this.$router.push({name: "single product", params: {prodID: prodID}});
    },

    sortPrice(){
      this.$store.commit("sortProductsByPrice")
    }, 

    sortName(){
      this.$store.commit("sortProductsByName")
    }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: 'Lalezar', cursive;
     color: #FFF9F0;
}

.background{
  background-color: #FFDF7D;
  padding: 1%;
}
#top{
  background-color: black;
  padding: .1%;
}

.product{
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  row-gap: 2px;
}
@media only screen and (max-width: 1365px){
  .product{
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width: 948px){
  .product{
    grid-template-columns: auto;
    width: 100%;
  }
}



#image{
  height: 70vh;
}

.card{
  width: 90%;
  height: 100%;
  background-color: black;
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