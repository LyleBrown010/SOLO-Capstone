<template>
    <div class="">
        <h2>User Profile</h2>
        <img class="img-fluid" :src="$store.state.user?.userProfile">
        <div class="information">
            <h4>Welcome, {{$store.state.user?.firstName}}{{$store.state.user?.lastName}}</h4>
            <p>{{$store.state.user?.email}}</p>
            <p>{{$store.state.user?.userRole}}</p>
        </div>
    </div>
</template>