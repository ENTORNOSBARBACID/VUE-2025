<template>
  <h1>Metodos filters</h1>
  <h3 v-for="numero in numeros" :key="numero" style="color:blue">Numero:{{numero}}, Doble:{{$filters.getNumeroDoble(numero)}}</h3>
  <h3 v-for="nombre in nombres" :key="nombre" style="color:green">Nombre: {{nombre}}, Mayusculas: {{$filters.mayusculas(nombre)}}</h3>
</template>

<script>
export default {
    name: "MetodosFilters",
    computed:{

    },
    data(){
        return {
            numeros:[10, 23, 15, 54, 78],
            nombres:["Elena", "Lucia", "Almudena", "Silvia", "Alberto"]
        }
    }
}
</script>

<style>

</style>