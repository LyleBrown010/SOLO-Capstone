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

            <button type="submit">Login</button>
            <p>Don't have an account?</p>
            <button class="link">
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
form{
  border: 3px solid black;
  padding: 10%;
  border-radius: 15px;
  width: 100%;
}

.page{
  height: 75vh;
}
</style>