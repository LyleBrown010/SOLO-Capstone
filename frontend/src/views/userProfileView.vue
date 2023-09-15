<template>
    <!-- <div class="">
        <h2>User Profile</h2>
        <img class="img-fluid" :src="$store.state.user?.userProfile">
        <div class="information">
            <h4>Welcome, {{$store.state.user?.firstName}}{{$store.state.user?.lastName}}</h4>
            <p>{{$store.state.user?.email}}</p>
            <p>{{$store.state.user?.userRole}}</p>
        </div>
        <div>
          <button type="submit" class="btn logout-btn"><router-link to="/logout" class="logout-text">Log Out</router-link></button>
          <button type="submit" class="btn del-btn" @click="deleteUser(user.userID)">Delete Account</button>
        </div>
    </div> -->
  <div v-if="currentUser" class="product_details" :key="currentUser.userId" :user="currentUser">
    <div class="card mx-auto">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="card my-2 row">
          <div class="row justify-content-center align-items-center">
            <div class="col-6">
              <img
                class="profile"
                :src="user.userProfile"
                :alt="user.firstName"
              />
            </div>
            <div class="col-4">
              <h1>Profile</h1>

              <h3>First Name:</h3>
              <p>{{ user.firstName }} {{ user.lastName }}</p>
              <h3>Role:</h3>
              <p>{{ user.userRole }}</p>
              <h3>Email:</h3>
              <p>{{ user.email }}</p>
              <button>
                <router-link
                  :to="{ name: 'edit user', params: { id: user.userId } }"
                  ><img
                    class="edit-icon"
                    src="https://i.postimg.cc/T2Z8Qtg6/icons8-edit-50-removebg-preview.png"
                    alt=""
                /></router-link>
              </button>
              <button
                type="submit"
                class="btn btton"
                @click="deleteUser(user.userID)"
                id="delete-row"
              >
                <img
                  class="edit-icon"
                  src="https://i.postimg.cc/kMtSk56b/icons8-delete-30.png"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <spinner />
  </div>
  



</template>
<script>


export default {
  // props: ["user"],
  
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
    id() {
      return this.$route.params.id;
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },

  mounted() {
    
    this.$store.dispatch("fetchUser", this.id).then(() => {
    console.log(this.currentUser); // Log the user data
  });
  },

  methods: {
    deleteUser(userID) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", userID);
        this.$router.push("/login");
      }
      else{
        alert("Failed to delete user. Please try again.");
      }
    },
  },
};
</script>
