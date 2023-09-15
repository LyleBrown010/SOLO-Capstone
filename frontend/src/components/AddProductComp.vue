<template>
    <div>
        <div class="button">
            <a 
            data-bs-toggle = "modal"
            data-bs-target = "#add-product-modal"
            href="#add-product-modal"
            class="button1"
            id="btn"
            >Add Product</a>
        </div>

        <div class="modal" id="add-product-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1>Add Product: </h1>
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div>
                        <form  class="card">
                            <div>
                                <!-- <label for="prodID" class="form-label">Product Name</label>
                                <input 
                                v-model="model.product.prodID"
                                type="text"
                                id="prodID"
                                name="prodID"
                                class="form-control"
                                /> -->
                                <label for="productName" class="form-label">Product Name</label>
                                <input 
                                v-model="model.product.productName"
                                type="text"
                                id="productName"
                                name="productName"
                                class="form-control"
                                required oninvalid="this.setCustomValidity('Please insert Product Name')"
                                oninput="this.setCustomValidity('')"
                                />
                                <label for="productPrice" class="form-label">Price</label>
                                <input 
                                v-model="model.product.productPrice"
                                type="number"
                                id="productPrice"
                                name="productPrice"
                                class="form-control"
                                required oninvalid="this.setCustomValidity('Please insert Product Price')"
                                oninput="this.setCustomValidity('')"
                                />
                                <label for="category" class="form-label">Category</label>
                                <input 
                                v-model="model.product.category"
                                type="text"
                                id="category"
                                name="category"
                                class="form-control"
                                required oninvalid="this.setCustomValidity('Please insert Category')"
                                oninput="this.setCustomValidity('')"
                                />
                                <label for="productDescription" class="form-label">Description</label>
                                <input 
                                v-model="model.product.productDescription"
                                type="text"
                                id="productDescription"
                                name="productDescription"
                                class="form-control"
                                required oninvalid="this.setCustomValidity('Please insert product Description')"
                                oninput="this.setCustomValidity('')"
                                />
                                <label for="artistName" class="form-label">Artist Name</label>
                                <input 
                                v-model="model.product.artistName"
                                type="text"
                                id="artistName"
                                name="artistName"
                                class="form-control"
                                required oninvalid="this.setCustomValidity('Please insert Artist Name')"
                                oninput="this.setCustomValidity('')"
                                />
                                <label for="productUrl" class="form-label">Image</label>
                                <input 
                                v-model="model.product.productUrl"
                                type="text"
                                id="productUrl"
                                name="productUrl"
                                class="form-control"
                                required oninvalid="this.setCustomValidity('Please insert Image')"
                                oninput="this.setCustomValidity('')"
                                />
                            </div>
                        
                        </form>
                    </div>
                    <div class="modal-footer">
                        <div class="p-3 text-center">
                            <button
                            type="submit"
                            id="btn"
                            class="btn m-2 add-btn text-font"
                            @click="addProduct()"
                            >
                            Add Product
                            </button>
                            <button type="reset" class="btn m-2 clr-btn text-font" id="btn">
                            Clear Fields
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    // props: ["product"],
    data(){
        return{
            model: {
                product:{
                    // prodID: "",
                    productName: "",
                    productPrice: "",
                    category: "",
                    productDescription: "",
                    artistName: "",
                    productUrl: ""
                }
            }
        }
    }, 

    methods: {
        addProduct(){
            this.$store.dispatch("addProduct", this.model.product)
            .then(() => {
                this.$router.push({name:"admin"}); 
            })
            .catch((error) => {
                console.error(error)
            })
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
     background-color: black;
     color: #FFF9F0;
}
input{
  border: 2px solid #FFD700;
  background-color: #FFF9F0;
}
.button1{
    color: #ffbf00;
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