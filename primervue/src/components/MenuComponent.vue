<template>
  <div>
    <ul id="menu">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/cine">Cine</router-link>
        </li>
        <li>
            <router-link to="/musica">Musica</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #menu{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>