<template>
  <h1>Ejemplo Checkbox</h1>
  <button @click="generarNumeros">Generar checkbox</button>
<br/>
    <span  v-for="n in numeros" :key="n">
        {{ n.numero }}
        <input type="checkbox" :value=n.numero @click="sumarorestar(n)"/><br/>
        </span>

<h1>{{ suma }}</h1>
</template>

<script>
export default {
    name:"CheckboxComponent",
    data(){
        return{
            numeros:[],
            suma:0
        }
    },
    methods:{
        generarNumeros(){
            this.suma=0
            this.numeros=[]
            var n={
            }
            for(var i=0; i<11; i++){
                n={
                    numero:parseInt(Math.random()*100)+1,
                    checked:false,
                }
                this.numeros.push(n);
            }
        },
        sumarorestar(n){
            if(n.checked){
                this.suma-=n.numero
                n.checked=false;
            }else{
                this.suma+=n.numero
                n.checked=true;
            }
        }
    }
}
</script>

<style>

</style>