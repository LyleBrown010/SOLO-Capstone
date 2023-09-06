<template>
    <div>
        <!-- Modal Button -->
        <div class="button">
            <a 
            data-bs-toggle="modal"
            data-bs-target="add-product-modal"
            href="#add-product-modal"
            class=""
            >Add Product</a>
        </div>

        <!-- Modal -->
        <div class="modal" id="add-product-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1>Add Product:</h1>
                        <button 
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div>
                        <form>
                            <div>
                                <label for="prodID" class="form-label">Product ID: </label>
                                <input 
                                v-model="model.product.prodID"
                                type="text" 
                                name="prodID" 
                                id="prodID"
                                class="form-control input-bg"/>

                                <label for="productName" class="form-label">Product Name: </label>
                                <input 
                                v-model="model.product.productName"
                                type="text" 
                                name="productName" 
                                id="productName"
                                class="form-control input-bg"/>

                                <label for="productPrice" class="form-label">Price</label>
                                <input 
                                v-model="model.product.productPrice"
                                type="text" 
                                name="productPrice" 
                                id="productPrice"
                                class="form-control input-bg"/>

                                <label for="category" class="form-label">Category</label>
                                <input 
                                v-model="model.product.category"
                                type="text" 
                                name="category" 
                                id="category"
                                class="form-control input-bg"/>

                                <label for="productDescription" class="form-label">Description</label>
                                <input 
                                v-model="model.product.productDescription"
                                type="text" 
                                name="productDescription" 
                                id="productDescription"
                                class="form-control input-bg"/>

                                <label for="artistName" class="form-label">Artist Name</label>
                                <input 
                                v-model="model.product.artistName"
                                type="text" 
                                name="artistName" 
                                id="artistName"
                                class="form-control input-bg"/>

                                <label for="productUrl" class="form-label">Image</label>
                                <input 
                                v-model="model.product.productUrl"
                                type="text" 
                                name="productUrl" 
                                id="productUrl"
                                class="form-control input-bg"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                        type="submit"
                        class=""
                        data-bs-dismiss="modal"
                        >Add Product</button>
                        <button
                        type="reset"
                        class=""
                        >Clear Fields</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            model: {
                product:{
                    prodID: "", 
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
            this.$store.dispatch("addProduct", this.model.product);
            this.$router.push("/admin"); 
            setTimeout(() => {
            console.log("Reload");
            location.reload()
            }, 50000);
        }
    }
}
</script>