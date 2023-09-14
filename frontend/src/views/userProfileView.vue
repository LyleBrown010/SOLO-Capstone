<template>
    <div class="">
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
    </div>
</template>
<script>


export default {
  props: ["user"],

  computed: {
    userData() {
      return this.$store.state.user;
    },
  },

  mounted() {
    this.$store.dispatch("fetchUser");
  },

  methods: {
    deleteUser(userID) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", userID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
  },
};
</script>
