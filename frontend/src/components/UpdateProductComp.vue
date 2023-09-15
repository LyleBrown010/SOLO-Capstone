<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openEditModal(product.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + product.prodID"
    >
      Edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal' + product.prodID"
      tabindex="-1"
      :aria-labelledby="'exampleModalLabel' + product.prodID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Update Product:
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body card">
            <div>

            <label for="productName" class="form-label">Product Name: </label>
            <input class=".input-bg"
              placeholder="name"
              type="text"
              v-model="editingProduct.productName"
              required oninvalid="this.setCustomValidity('Please insert Product Name')"
            oninput="this.setCustomValidity('')"
            /> <br>
            <label for="productPrice" class="form-label">Price: </label>
            <input class=".input-bg"
              placeholder="price"
              type="number"
              v-model="editingProduct.productPrice"
              required oninvalid="this.setCustomValidity('Please insert Product Price')"
            oninput="this.setCustomValidity('')"
            /> <br>
            <label for="description" class="form-label">Description: </label>
            <input class=".input-bg"
              placeholder="description"
              type="text"
              v-model="editingProduct.productDescription"
              required oninvalid="this.setCustomValidity('Please insert Product Description')"
            oninput="this.setCustomValidity('')"

            /> <br>
            <label for="artistName" class="form-label">Artist Name: </label>
            <input class=".input-bg"
              placeholder="artistName"
              type="text"
              v-model="editingProduct.artistName"
              required oninvalid="this.setCustomValidity('Please insert Artist Name')"
            oninput="this.setCustomValidity('')"
            /> <br>
            <label for="category" class="form-label">Category: </label>
            <input class=".input-bg"
              placeholder="category"
              type="text"
              v-model="editingProduct.category"
              required oninvalid="this.setCustomValidity('Please insert Product Category')"
            oninput="this.setCustomValidity('')"
            /> <br>
            <label for="productUrl" class="form-label">Product Image: </label>
            <input class=".input-bg"
              placeholder="image"
              type="text"
              v-model="editingProduct.productUrl"
              required oninvalid="this.setCustomValidity('Please insert Product Image')"
            oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary text-black"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="updateProduct(product.prodID)"
            >
              UPDATE!
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
  props: ["product"],
  data() {
    return {
      editingProduct: {
        ...this.product,
      },
      editingProductID: null,
      model: {
        product: {
          prodID: "",
          productName: "",
          productPrice: 0,
          artistName: "",
          category: "",
          productDescription: "",
          productUrl: "",
        },
      },
    };
  },
  computed: {
    currentProduct() {
      return this.$store.state.product;
    },
  },
  methods: {
    openEditModal(prodID) {
      this.editingProductID = prodID;
      this.editingProduct = {
        ...this.$store.state.products.find(
          (product) => product.prodID === prodID
        ),
      };
    },
    updateProduct(prodID) {
      this.$store
        .dispatch("updateProduct", {
          prodID: prodID,
          ...this.editingProduct,
        })
        .then(() => {
          console.log("Product updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });
    },
  },
};
</script>