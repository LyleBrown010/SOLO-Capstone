import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://solo-4p4z.onrender.com/";

export default createStore({
  state: {
    users: null, 
    user:null, 
    products: null, 
    product: null, 
    selectedProducts: null,
    spinner: null,
    message: null, 
    asc: true
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
    setSelectedProducts(state, product){
      state.selectedProduct = product
    }, 
    setSpinner(state, spinner){
      state.spinner = spinner;
    },
    setMessage(state, message){
      state,message = message;
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
    }
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
        const {data} = await axios.get(`${url}user`);
        context.commit("setUser", data.results)
      }
      catch(e){
        context.commit("setMessage", "An error occured in fetching a single user")
      }
    }

    //products

    //cart
  }
})
