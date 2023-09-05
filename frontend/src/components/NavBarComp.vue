<template>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid row">
    <div class="col-4">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">SOLO</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div class="col-4 d-flex justify-content-center">
      <a class="navbar-brand" href="#">Offcanvas navbar</a>
    </div>
    <div class="col-4 d-flex justify-content-end text-white">
      log in/register
    </div>
  </div>
</nav>


</template>

<style scoped>

</style>