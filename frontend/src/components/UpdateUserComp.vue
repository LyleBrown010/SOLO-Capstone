<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openEditModal(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#texampleModal' + user.userID"
      id="btn"
    >
      Edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade p-3"
      :id="'texampleModal' + user.userID"
      tabindex="-1"
      :aria-labelledby="'texampleModalLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="texampleModalLabel3">
              Update User:
            </h1>
            <button
              id="btn"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body card">
            <div class="mb-3 text-font">
              <label for="">UserID</label> <br />
              <input
                type="text"
                placeholder="ID"
                v-model="editingUser.userID"
                required
                oninvalid="this.setCustomValidity('Please insert the userID')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div class="mb-3 text-font">
              <label for="">First Name</label> <br />
              <input
                type="text"
                placeholder="first name"
                v-model="editingUser.firstName"
                required
                oninvalid="this.setCustomValidity('Please insert User First Name')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div class="mb-3 text-font">
              <label for="">Last Name</label> <br />
              <input
                type="text"
                placeholder="last name"
                v-model="editingUser.lastName"
                required
                oninvalid="this.setCustomValidity('Please insert User Last Name')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div class="mb-3 text-font">
              <label for="">Role</label> <br />
              <input
                type="text"
                placeholder="role"
                v-model="editingUser.userRole"
                required
                oninvalid="this.setCustomValidity('Please insert User Role')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div class="mb-3 text-font">
              <label for="">Email Address</label> <br />
              <input
                type="text"
                placeholder="email address"
                v-model="editingUser.email"
                required
                oninvalid="this.setCustomValidity('Please insert User Email')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div class="mb-3 text-font">
              <label for="">Profile Image</label> <br />
              <input
                type="text"
                placeholder="profile image"
                v-model="editingUser.userProfile"
                required
                oninvalid="this.setCustomValidity('Please insert User Image')"
                oninput="this.setCustomValidity('')"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal" id="btn">
              Close
            </button>
            <button type="button" class="btn" @click="updateUser(user.userID)" id="btn">
              Update!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      editingUser: {
        ...this.user,
      },
      editingUserID: null,
      model: {
        user: {
          firstName: "",
          lastName: "",
          userRole: "",
          emailAdd: "",
          userProfile: "",
        },
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openEditModal(id) {
      console.log("reached");
      this.editingUserID = id;
      this.editingUser = {
        ...this.$store.state.users.find((user) => user.userID === id),
      };
    },
    // updateUser(id) {
    //   this.$store
    //     .dispatch("updateUser", {
    //       userID: id,
    //       data: { ...this.editingUser },
    //     })
    //     .then(() => {
    //       console.log("User updated!");
    //       setTimeout(() => {
    //         window.location.reload();
    //       }, 500);
    //     })
    //     .catch((err) => {
    //       console.error("Error updating: ", err);
    //     });
    // },

    updateUser(id) {
      this.$store
        .dispatch("updateUser", {
          userID: id,
          data: { ...this.editingUser },
        })
        .then(() => {
          this.$router.push({ name: "admin" });
        })
        .catch((error) => {
          console.log(error);
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
