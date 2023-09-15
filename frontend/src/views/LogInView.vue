<template>
  <div class="page">
    <h3 class="h3 text-center">ACCOUNT LOGIN</h3>
    <div style="display: flex; justify-content: center">
      <div class="row">
        <form @submit.prevent="loginUser">
          <div class="container">
            <label for="email"><b>Email Address</b></label>
            <input
              type="email"
              placeholder="Enter Username"
              v-model="payload.email"
              id="email"
              required
            /> <br>

            <label for="password"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              v-model="payload.userPassword"
              id="password"
              required
            /> <br><br>

            <button type="submit" id="btn">Login</button>
            <p>Don't have an account?</p>
            <button class="link" id="btn">
              <router-link
                to="/register"
                class=""
                >Register</router-link
              >
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
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

    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    loginUser() {
      this.$store.dispatch('login', this.payload)
        .then(() => {
          Swal.fire({
            title: "Success",
            text: "You are now logged in",
            icon: "success",
            confirmButtonText: "OK",
            timer: 1000
          });
          this.$router.push("/profile");
        })
      
    }
  },
  mounted() {
    //   console.log(cookies.get('setToken'));
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers")
  }
};
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

form{
  border: 3px solid black;
  padding: 10%;
  border-radius: 15px;
  width: 100%;
}

.page{
  height: 75vh;
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