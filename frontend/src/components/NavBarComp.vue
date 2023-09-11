<template>
<div>
<nav class="navbar bg-black navbar-expand-lg border-body" data-bs-theme="dark">
  <div class="container-fluid row">
    <div class="col-4">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link id="text" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link id="text" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link id="text" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link id="text" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link id="text" to="/contact">Contact</router-link>
          </li>
      </ul>
    </div>
    </div>
    <div class="col-4 d-flex justify-content-center">
      <img id="logo" src="https://i.postimg.cc/nVs9wbSq/1-removebg-preview222.png" alt="">
    </div>
    <div class="col-4 d-flex justify-content-evenly text-white">
      <router-link id="text" to="/login">Log In</router-link>
      <router-link id="text" to="/register">Register</router-link>
    </div>
  </div>
</nav>
</div>





</template>

<style scoped>
#logo{
  width: 100px;
  height: 50px;
}

#text{
  color: #FFBF00;
  text-decoration: none;
  font-family: 'Rubik Mono One', sans-serif;

}

.navbar-toggler{
  border: 1px solid#FFBF00;
}


</style>