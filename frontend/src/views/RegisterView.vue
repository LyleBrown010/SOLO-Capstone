<template>
  <div class="d-flex align-items-center justify-content-center star-bg">
    <div class="card m-5 p-5 w-50 purple-bg">
        <h1 class="text-center heading-text">Register :</h1>

      <form @submit.prevent="registerUser" class="p-3">
        <div class="mb-3">
          <label for="firstName" class="form-label"> First Name: * </label>
          <input
            v-model="user.firstName"
            type="text"
            id="firstName"
            class="form-control input-bg"
            placeholder="eg: Clayton"
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
            placeholder="eg: Sherman"
            required
            oninvalid="this.setCustomValidity('Please enter your last name.')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3">
          <label for="emailAdd" class="form-label"> Email: * </label>
          <input
            v-model="user.emailAdd"
            type="text"
            id="emailAdd"
            class="form-control input-bg"
            placeholder="eg: claytonsherman@gmail.com"
            required
            oninvalid="this.setCustomValidity('Please enter a valid email address.')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3">
          <label for="userPass" class="form-label"> Password: * </label>
          <input
            v-model="user.userPass"
            type="text"
            id="password"
            class="form-control input-bg"
            required
            oninvalid="this.setCustomValidity('Please enter a password')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3">
          <label for="userImg" class="form-label"> User Profile: </label>
          <input
            v-model="user.userImg"
            type="text"
            id="userImg"
            class="form-control input-bg"
            placeholder="Insert image link."
          />
        </div>

        <p>* indicates a required field</p>

        <div class="text-center">
          <button
            type="submit"
            class="m-2 btn add-user-btn"
          >
            Register
          </button>
          <button type="reset" class="m-2 btn clr-btn">Clear Fields</button>
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
        emailAdd: "",
        userPass: "",
        userImg: "",
      },
    };
  },

  methods: {
    registerUser() {
      this.$store.dispatch("registerUser", this.user);
      this.$swal({
              title: "Welcome to Moonstruck Vinyl's !",
              text: `You have been successfully registered! Happy Shopping!`,
              icon: "success",
              timer: 5000
            });
      this.$router.push("/");
    },
  },
};
</script>