<template>
  <div class="content">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/collatz" class="link">Collatz</router-link>
    <router-link to="/tabla" class="link">Tabla</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .content{
        display: flex;
        background-color: grey;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .link{
        text-decoration: none;
        color:black;
        padding: 15px;
    }
    .link:hover{
        color:white;
    }
</style>