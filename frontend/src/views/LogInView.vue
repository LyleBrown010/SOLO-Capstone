<template>
    <div>
      <h3 class="h3">ACCOUNT LOGIN</h3>
      <div style="display: flex; justify-content:center">
        <div class="row">
        <form @submit.prevent="login">
          <div class="container">
          <label for="email"><b>Email Address</b></label>
        <input type="text" placeholder="Enter Username" v-model="payload.email" name="email" required>
          
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="payload.userPassword" name="passsword" required>
          
        <button type="submit">Login</button> 
        </div>
          </form>
        </div>
        </div>
    </div>
</template>

<script>
    import {useCookies} from "vue3-cookies";
    const {cookies} = useCookies();
  export default {
    data() {
    return {
      payload: {
        email: "",
        userPassword: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },

    message(){
        return this.$store.state.message
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
      this.$router.push("/profile");
    },
  },

  mounted(){
    console.log(cookies.get('setToken'))
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
  }
</script>