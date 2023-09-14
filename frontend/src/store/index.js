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
    user:null || JSON.parse(localStorage.getItem("user")), 
    userAuth: null,
    products: null, 
    product: null, 
    selectedProduct: null,
    token: null || localStorage.getItem("token"),
    cart: null,
    message: null, 
    asc: true
  },

  mutations: {
    setUsers(state, users){
      state.users = users;
    }, 
    setUser(state, user){
      state.user = user, 
      state.userAuth = true, 
      localStorage.setItem("user", JSON.stringify(user)); 
    },
    setUserLoggedIn(state, setUserLoggedIn){
      state.setUserLoggedIn = setUserLoggedIn; 
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
    setCart(state, cart){
      state.cart = cart
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
    async login(context, payload){
      try{
        const res = await axios.post(`${url}login`, payload);
        const {result, token, message, err} = await res.data;

        if(result){
          context.commit("setUser", result);
          context.commit("setToken", token);
          localStorage.setItem("setToken", token);
          localStorage.setItem("user", JSON.stringify(result));

          cookies.set("AuthorizedUser", {token, message, result});
          sweet({
            title: message,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`, 
            icon: "success", 
            timer: 4000,
          });
          // router.push({name: "profile"});
        }
        else{
          context.commit("setMessage", err);
        }
      }
      catch(e){
        console.error(e)
      }

    },



      // try{
      //   const {message, token, payload} = (
      //     await axios.post(`${url}login`, payload)
      //   ).data; 
      //   if(results){
      //     context.commit("setUser", {results, message});
      //     cookies.set("AuthorisedUser", { message, token, results});
      //     authUser.applyToken(token);
      //     sweet({
      //       title: message,
      //       text: `Welcome back ${results?.firstName} ${results?.lastName}`, 
      //       icon: "success", 
      //       timer: 4000,
      //     });
      //     router.push({name: "profile"});
      //   }
      //   else{
      //     sweet({
      //       title: "Error",
      //       text: message, 
      //       icon: "error",
      //       timer: 4000
      //     });
      //   }
      // }
      // catch(e){
      //   context.commit("setMessage", "An error has occurred while logging in")
      // }

    async logOut(context){
      context.commit("setUser")
      cookies.remove("AuthenticatedUser");
    },



    // async login(context, payload){
    //   try{
    //     const response = await axios.post(`${url}login`, payload); 
    //     alert ('LOGGED IN')
    //     const {results, jwToken, message, err} = await response.data
    //     if(results){
    //       context.commit ('setUser', results);
    //       context.commit('setToken', jwToken);
    //       localStorage.setItem('loginToken', jwToken); 
    //       localStorage.setItem('user', JSON.stringify(results));
    //       context.commit('setMessage', message)
    //       setTimeout(() => {
    //         router.push({name: 'products'})
    //       }), 3000
    //     }
    //     else{
    //       context.commit('setMessage', err);
    //     }
    //   }
    //   catch(error){
    //     console.error(error); 
    //   }
    // },

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

    async addToCart(context, payload){
      
    }
  }
})
