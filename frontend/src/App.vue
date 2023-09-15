<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue'
import FooterComp from './components/FooterComp.vue';
export default {
  components: {NavBarComp, FooterComp},

  mounted() {
    this.$store.dispatch("fetchProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },
  created() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      this.$store.commit("setUserData", JSON.parse(userData));
    }
  },

}

</script>


