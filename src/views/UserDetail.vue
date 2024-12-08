<template>
    <h1>INI halaman user {{ $route.params.id }}</h1> <br>

    <!-- router post -->
    <RouterLink :to="'/user/'+$route.params.id+'/posts'">{{ $route.params.id }}'s Post</RouterLink> 
    <br>
    <RouterLink :to="'/user/'+$route.params.id+'/profile'">{{ $route.params.id }}'s Profile</RouterLink>
</template>

<style scoped>
    body{
        margin-left: 20px;
    }
</style>