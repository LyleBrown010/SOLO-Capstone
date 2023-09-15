import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router';
import sweet from 'sweetalert'
import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies()
const url = "https://solo-4p4z.onrender.com/";
// import authUser from '@/services/AuthenticateUser'

export default createStore({
  state: {
    users: null, 
    user:null,
    userAuth: null,
    products: null, 
    product: null, 
    selectedProduct: null,
    token: null,
    cart: [],
    message: null, 
    asc: true, 
    userData: null, 
    userRole: null,
    registrationStatus: null,
    logInStatus: null,
    error: null,
  },

  getters:{
    cartTotal(state){
      const total = state.cart.reduce((total, product) => total + parseFloat(product.productPrice), 0);
      return total.toFixed(2);
    },
  },
  mutations: {
    setUsers(state, users){
      state.users = users;
    }, 
    setUser(state, user){
      state.user = user;
    },
    setProducts(state, products){
      state.products = products;
    },
    setProduct(state, product){
      state.product = product;
    },

    setSelectedProduct(state, product){
      state.selectedProduct = product
    },
    setToken(state, token){
      state.token = token
    },
    setCart(state, value){
      state.cart = value
    },
    setMessage(state, message){
      state,message = message;
    },
    setRegistrationStatus(state, status){
      state.registrationStatus = status;
    }, 
    setLogInStatus(state, status){
      state.logInStatus = status
    },
    setUserData(state, userData) {
      state.userData = userData;
      if (userData && userData.userRole) {
        state.userRole = userData.userRole;
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData, userData.userRole);
      } else {
        state.userData = null;
        state.userRole = null;
        localStorage.removeItem("userData");
      }
    },

    setError(state, error){
      state.error = error
    },

    addToCart(state, product){
      state.cart.push(product)
    },

    removeFromCart(state, cartID){
      state.cart = state.cart.filter((cart) => cart.cartID !== cartID) 
    },

    clearCart(state) {
      state.cartItems = [];
    },
    setUserLoggedIn: (state, userLog) => {
      state.userLog = userLog;
    },
    sortProductsByPrice: (state) => {
      state.products.sort((a, b) => { 
        return a.productPrice - b.productPrice; 
      }); 
      if(!state.asc){
        state.products.reverse(); 
      }
      state.asc = !state.asc
    },

    sortProductsByName: (state) => {
      state.products.sort((a, b) => { 
        return a.productName.localeCompare(b.productName); 
      }); 
      if(!state.asc){
        state.products.reverse(); 
      }
      state.asc = !state.asc
    },
  },

  actions: {
    //users
    async fetchUsers(context){
      try{
        const {data} = await axios.get(`${url}users`);
        context.commit("setUsers", data.results);
      }
      catch(e){
        context.commit("setMessage", "An error occured in fetching users");
      }
    },

    async fetchUser(context){
      try{
        const {data} = await axios.get(`${url}user/${payload.userID}, payload.data`);
        context.commit("setUser", data.results)
      }
      catch(e){
        context.commit("setMessage", "An error occured in fetching a single user")
      }
    },

    async register(context, payload){
      console.log("register function started");
      try{
        const res = await axios.post(`${url}register`, payload);
        const {message, err} = await res.data;
        if(err){
          context.commit("setMessage", "Something went wrong in the registration process");
        }
        if(message){
          context.commit("setUser", message);
          setTimeout(() => {
            router.push('/login')
          }), 5000
        }
      }
      catch(e){
        context.commit("setMessage", "An error occurred"); 
      }
    }, 
      // token = AuthorisedUser
      async login(context, payload) {
        console.log("start")
        try {
          console.log("reached")
          const { message, token, result } = (
            await axios.post(`${url}login`, payload)
          ).data;
          if (result) {
            console.log(result)
            context.commit("setUser", { result, message });
            cookies.set("AuthorizedUser", { message, token, result });
            userAuth.applyToken(token);
            sweetAlert({
              title: message,
              text: `Welcome back ${result?.firstName} ${result?.lastName}`,
              icon: "success",
              timer: 1000,
            });
            this.$router.push('/profile');
          } else {
            sweetAlert({
              title: "Error",
              text: message,
              icon: "error",
              timer: 1000,
            });
          }
        } catch (e) {
          context.commit("setMessage", "An error has occured");
        }
      }, 

    async logOut(context){
      context.commit("setUser")
      location.reload()
      cookies.remove("AuthenticatedUser");
    },

    async updateUser(context, payload){
      console.log(payload)
      try{
        const res = await axios.patch(`${url}user/${payload.userID}`, payload.data);
        const {message, err} = res.data
        if(message){
          context.commit("setUser", message)
        }
        else{
          context.commit("setMessage", err)
        }
      }
      catch(e){
        context.commit("setMessage", "An error occurred in updating a user");
      }
    },

    async deleteUser(context, id){
      try{
        const {res} = await axios.delete(`${url}user/${id}`);
        const {message, err} = res.data
        if(err){
          console.error("An error has occurred: ", err)
          context.commit("setMessage", "An error has occurred in deleting a user")
        }
        if(message){
          context.dispatch("fetchProducts")
          context.commit("setUser", message)
          console.log("User deleted successfully")
        }
      }
      catch(e){
        context.commit("setMessage", "An error occurred in deleting a user");
      }
    }, 

    //products
    async fetchProducts(context){
      try{
        const {data} = await axios.get(`${url}products`);
        context.commit("setProducts", data.results);
      }
      catch(e){
        context.commit("setMessage", "An error occurred in a fetching products");
      }
    }, 

    async fetchProduct(context, id){
      try{
        const{data} = await axios.get(`${url}product/${id}`);
        context.commit("setProduct", data.results);
      }
      catch(e){
        context.commit("setMessage", "An error occurred in a fetching a single product");
      }
    },

    async addProduct(context, payload){
      console.log("addProduct function started");
      try{
        const {res} = await axios.post(`${url}product`, payload);
        const {message, err} = await res.data; 
        console.log(message, err);
        if(message){
          context.commit("setProduct", message);
          sweet({
            title: message,
            text: "Successfully added product",
            icon: "success", 
            timer: 2000
          })
        }
        else{
          context.commit("setMessage", err);
        }
      }
      catch(e){
        context.commit("setMessage", "An error occurred while adding a product"); 
      }
    }, 

    async updateProduct(context, payload){
      console.log(payload)
      try{
        const res = await axios.patch(`${url}product/${payload.prodID}`, payload);
        const{message, err} = await res.data;
        console.log(message, err); 
        if(err){
          console.log("An error has occurred: ", err);
          context.commit("setMessage", err); 
        }
        if(message){
          context.dispatch("fetchProducts")
          context.commit("setProduct", message);
          context.commit("setMessage", "Successfully updated product");
        }
      }
      catch(e){
        context.commit("setMessage", e);
      }
    },

    async deleteProduct(context, prodID){
      console.log("delete function called"); 
      try{
        const {res} = await axios.delete(`${url}product/${prodID}`);
        const {message, err} = await res.data;
        if(err){
          alert("An error has occurred, please try again");
        }
        if(message){
          context.commit("setProduct", message);
        }
        else{
          context.commit("setMessage", "An error occurred");
        }
      }
      catch(e){
        context.commit("setMessage", "An error occurred while deleting a product");
      }
    },

    //cart
    async getCart(context, id){
      try{
        const {res} = await axios.get(`${url}user/${id}/carts`);
        context.commit("setCart", data.results); 
      }
      catch(e){
        context.commit("setMessage", "Error fetching the cart")
      }
    },

    async addToCart({commit}, {userID, prodID}){
      try{
        const response = await axios.post(`${url}users/${userID}/cart`, {
          userID, prodID,
        });
        if(response.status === 200){
          commit("addToCart", response.data);
        }
        
      }
      catch(err){
        console.error(err);
      }
    },

    async removeFromCart({commit}, {userID, cartID}){
      try{
        await axios.delete(`${url}users/${userID}/cart/${cartID}`);
        commit("removeFromCart", cartID);
      }
      catch(err){
        console.error(err)
      }
    },

    async clearCart({ commit }, { userID }) {
      try {
        await axios.delete(`${url}users/${userID}/cart`);
        commit("clearCart", userID);
      } 
      catch (err) {
        console.error(err);
      }
    },
  }
})
