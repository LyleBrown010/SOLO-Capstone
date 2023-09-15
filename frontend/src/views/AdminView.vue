<template>
<div>
  <h1 class="header text-center">Admin</h1><br>
  <div>
    <h3 class="users text-center">Users</h3>
    <addUser />
    <div class="table-responsive">
          <table class="text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Role</th>
          <th>Email Address</th>
          <th>Profile Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.userID">
        <tr v-if="users">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.email }}</td>
          <td class="image">
            <img
              :src="user.userProfile"
              :alt="user.firstName"
              loading="lazy"
              class="img-fluid image"
            />
          </td>
          <td>
            <updateUser :user="user" /><button
              class="btn"
              @click="deleteUser(user.userID) "
              id="btn"
            >
              Delete
            </button>
          </td>
        </tr>
        <tr v-else>
          <Spinner />
        </tr>
      </tbody>
    </table>
    </div>

    <br><br>
    <div>
      <h3 class="products text-center">Products</h3>
      <addProduct />
      <div class="table-responsive">
        <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Artist Name</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product">
          <tr v-if="products">
            <td>{{ product.prodID }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.productDescription }}</td>
            <td>{{ product.productPrice }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.artistName }}</td>
            <td >
              <img
                :src= product.productUrl
                :alt="product.productName"
                class="img-fluid product-image"
                loading="lazy"
              />
            </td>
            <td>
              <updateProduct :product="product" />
              <button @click="deleteProduct(product.prodID)" class="btn" id="btn">
                Delete
              </button>
            </td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
      <br>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Spinner from "../components/SpinnerComp.vue";
import addProduct from "../components/AddProductComp.vue";
import addUser from "../components/AddUserComp.vue";
import updateProduct from "../components/UpdateProductComp.vue";
import updateUser from "@/components/UpdateUserComp.vue";
export default {
  components: {
    Spinner,
    addProduct,
    addUser,
    updateProduct,
    updateUser,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.$store.state.product;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteProduct(prodID) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$store.dispatch("deleteProduct", prodID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", id);
        setTimeout(() => {
          console.log("Deleting now...");
          location.reload();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: 'Lalezar', cursive;
}
h1, h3{
  font-family: 'Rubik Mono One', sans-serif;
}
table{
  padding: 5px;
  border: 2px solid #FFBF00;
  width: 100%;
}

th, td{
  border-right: 2px solid #FFBF00;
  padding: 4px;
  color: #FFDF7D;
  background-color: black;
}

.product-image{
  width: 100%;
  height: 100%;
}

.image{
  width: 50px;
  height: 50px;
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