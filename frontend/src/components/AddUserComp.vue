<template>
  <div>
    <div class="button">
      <a
        data-bs-toggle="modal"
        data-bs-target="#add-user-modal"
        href="#add-user-modal"
        class="button1"
        id="btn"
        >Add User</a
      >
    </div>

    <div class="modal" id="add-user-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1>Register:</h1>
            <button
              id="btn"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form class="card">
              <div>
                <label for="firstName" class="form-label">First Name</label>
                <input
                  v-model="model.user.firstName"
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  required
                  oninvalid="this.setCustomValidity('Please insert User First Name')"
                  oninput="this.setCustomValidity('')"
                />
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  v-model="model.user.lastName"
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  required
                  oninvalid="this.setCustomValidity('Please insert User Last Name')"
                  oninput="this.setCustomValidity('')"
                />
                <label for="email" class="form-label">Email</label>
                <input
                  v-model="model.user.email"
                  type="text"
                  id="email"
                  name="email"
                  class="form-control"
                  required
                  oninvalid="this.setCustomValidity('Please insert User Email')"
                  oninput="this.setCustomValidity('')"
                />
                <label for="userProfile" class="form-label">userProfile</label>
                <input
                  v-model="model.user.userProfile"
                  type="text"
                  id="userProfile"
                  name="userProfile"
                  class="form-control"
                  required
                  oninvalid="this.setCustomValidity('Please insert User Image')"
                  oninput="this.setCustomValidity('')"
                />
                <label for="userRole" class="form-label">userRole</label>
                <input
                  v-model="model.user.userRole"
                  type="text"
                  id="userRole"
                  name="userRole"
                  class="form-control"
                  required
                  oninvalid="this.setCustomValidity('Please insert User Role')"
                  oninput="this.setCustomValidity('')"
                />
                <label for="userPassword" class="form-label"
                  >userPassword</label
                >
                <input
                  v-model="model.user.userPassword"
                  type="text"
                  id="userPassword"
                  name="userPassword"
                  class="form-control"
                  required
                  oninvalid="this.setCustomValidity('Please insert User Password')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="p-3 text-center">
              <button
                id="btn"
                type="submit"
                class="btn m-2 add-btn text-font"
                @click="addUser()"
              >
                Register!
              </button>
              <button type="reset" class="btn m-2 clr-btn text-font" id="btn">
                Clear Fields
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
  data() {
    return {
      model: {
        user: {
          firstName: "",
          lastName: "",
          email: "",
          userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
          userRole: "",
          userPassword: "",
        },
      },
    };
  },
  methods: {
    addUser() {
      this.$store
        .dispatch("register", this.model.user)
        .then(() => {
          this.$router.push({ name: "admin" });
        })
        .catch((error) => {
          console.error(error);
        });
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
.button1 {
  color: #ffbf00;
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
