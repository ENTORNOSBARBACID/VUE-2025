<template>
  <div class="content">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/series" class="link">Series</router-link>
    <router-link to="/cine" class="link">Cine</router-link>
    <router-link to="/directivas" class="link">Directivas</router-link>
    <router-link to="/parimpar" class="link">Par Impar</router-link>
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