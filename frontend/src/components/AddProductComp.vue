<template>
    <div>
        <div class="button">
            <a 
            data-bs-toggle = "modal"
            data-bs-target = "#add-product-modal"
            href="#add-product-modal"
            class=""
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
                                />
                                <label for="productPrice" class="form-label">Price</label>
                                <input 
                                v-model="model.product.productPrice"
                                type="number"
                                id="productPrice"
                                name="productPrice"
                                class="form-control"
                                />
                                <label for="category" class="form-label">Category</label>
                                <input 
                                v-model="model.product.category"
                                type="text"
                                id="category"
                                name="category"
                                class="form-control"
                                />
                                <label for="productDescription" class="form-label">Description</label>
                                <input 
                                v-model="model.product.productDescription"
                                type="text"
                                id="productDescription"
                                name="productDescription"
                                class="form-control"
                                />
                                <label for="artistName" class="form-label">Artist Name</label>
                                <input 
                                v-model="model.product.artistName"
                                type="text"
                                id="artistName"
                                name="artistName"
                                class="form-control"
                                />
                                <label for="productUrl" class="form-label">Image</label>
                                <input 
                                v-model="model.product.productUrl"
                                type="text"
                                id="productUrl"
                                name="productUrl"
                                class="form-control"
                                />
                            </div>
                        
                        </form>
                    </div>
                    <div class="modal-footer">
                        <div class="p-3 text-center">
                            <button
                            type="submit"
                            class="btn m-2 add-btn text-font"
                            @click="addProduct()"
                            >
                            Add Product
                            </button>
                            <button type="reset" class="btn m-2 clr-btn text-font">
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