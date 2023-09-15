<template>
  <div class="d-flex align-items-center justify-content-center">
    <div class="card m-5 p-5 w-50">
        <h1 class="text-center heading-text">Register :</h1>

      <form @submit.prevent="registerUser" class="p-3">
        <div class="mb-3">
          <label for="firstName" class="form-label"> First Name: * </label>
          <input
            v-model="user.firstName"
            type="text"
            id="firstName"
            class="form-control input-bg"
            required
            oninvalid="this.setCustomValidity('Please enter your first name')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3">
          <label for="lastName" class="form-label"> Last Name: * </label>
          <input
            v-model="user.lastName"
            type="text"
            id="lastName"
            class="form-control input-bg"
            required
            oninvalid="this.setCustomValidity('Please enter your last name.')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label"> Email: * </label>
          <input
            v-model="user.email"
            type="text"
            id="email"
            class="form-control input-bg"
            required
            oninvalid="this.setCustomValidity('Please enter a valid email address.')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3">
          <label for="userPassword" class="form-label"> Password: * </label>
          <input
            v-model="user.userPassword"
            type="text"
            id="password"
            class="form-control input-bg"
            required
            oninvalid="this.setCustomValidity('Please enter a password')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3">
          <label for="userProfile" class="form-label"> User Profile: </label>
          <input
            v-model="user.userProfile"
            type="text"
            id="userProfile"
            class="form-control input-bg"
            placeholder="Insert image link."
          />
        </div>

        <p>* indicates a required field</p>

        <div class="text-center">
          <button
            id="btn"
            type="submit"
            class="m-2 btn add-user-btn"
          >
            Register
          </button>
          <button type="reset" class="m-2 btn clr-btn" id="btn">Clear Fields</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        userPassword: "",
        userProfile: "",
      },
    };
  },

  methods: {
    registerUser() {
      this.$store.dispatch("registerUser", this.user);
      this.$swal({
              title: "Welcome to SOLO !",
              text: `You have been successfully registered!`,
              icon: "success",
              timer: 5000
            });
      this.$router.push("/");
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
     background-color: black;
     color: #FFF9F0;
}
input{
  border: 2px solid #FFD700;
  background-color: #FFF9F0;
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