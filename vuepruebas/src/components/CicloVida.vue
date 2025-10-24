<template>
<h1>Ciclo de vida y metodos VUE</h1>
<h2 style="color:red"> {{mensaje}}</h2>
<button @click=cambiarMensaje()>Cambiar mensaje</button>
</template>

<script>
export default {
    name:"cicloVida",
    data(){
        return{
            mensaje:"Hoy es vierneeeeeeees¡¡¡"
        }
    },
    methods: {
        //Aqui incluimos nuestros metodos personalizados
        cambiarMensaje(){
            this.mensaje="Estoy tope feliz"
        }
    },
    mounted(){
        console.log("Componente montado");
    },
    created(){
        console.log("Componente creado");
    },
    updated(){
        console.log("Componente actualizado");
    },
    unmounted(){
        console.log("Componente desmontado");
    }
}
</script>

<style>

</style>