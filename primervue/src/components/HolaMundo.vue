<template>
<div>
    <h1>Mi primer vue de viernes, que ilusion¡¡¡</h1>
    <h2>Hola, {{nombre}}</h2>
    <img src="../assets/images/breaking-bad.png">
</div>
</template>

<script>
    //VUE UTILIZA CODIGO JS(ESPECIAL)
    //CADA COMPONENT QUE GENEREMOS DEBE TENER UN NOMBRE OBLIGATORIO
    //Y DEBEMOS EXXPORTARLO CON DICHO NOMBRE. EL NAME ES LA ETIQUETA QUE
    //UTILIZARAN OTROS COMPONENTES PARA DIBUJAR

    export default{
        name: "HolaMundo",
        data(){
            //LAS VARIABLES EN JSON
            //DENTRO DE UN RETURN
            return{
                nombre:"Alberto",
                miArray:[1, 2, 3, 4],
                objeto:{}
            }
        }
    }
</script>
<style>
    h1 {
        color:blue;
    }
    @import "./../assets/css/estilos.css"
</style>