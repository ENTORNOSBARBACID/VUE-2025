<template>
  <h1>Tabla de multiplicar</h1>
  <lablel>Introduce un numero</lablel>
  <input type="number" v-model="numero"><br>
  <button @click="generarTablaMetodo">Generar tabla por metodo</button>
  <button @click="habilitar">Generar tabla mediante directivas</button>
  <div v-for = "fila in tablaD" :key="fila" v-html="fila">
  </div>
    <table v-if="status">
        <thead>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="n in 10" :key="n">
    
                <td>{{ numero }} x {{ n }}</td>
                
                <td>{{ numero * n }}</td>
                
            </tr>
        </tbody>
    </table>

    <table v-if="status">
        <thead>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="filas in 10" :key="filas" >
                <td>{{$filters.getOperacion(numero, filas)}}</td>
                <td>{{$filters  .getResultado(numero, filas)}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:"TablaMultiplicar",
    data(){
        return{
            numero:0,
            tablaD:[],
            status:false
        }
    },
    methods:{
        habilitar(){
            this.status=true
        },
        

        generarTablaMetodo(){
            var tabla=[]
            tabla.push("<table><th></th><tbody><tr>");
            for (var i=1; i<11; i++){
                tabla.push("<td>"+this.numero+" * "+i+" = </td><td>"+(this.numero*i)+"</td>");
            }
            tabla.push("</tr></tbody></table>")
            console.log(tabla)
            this.tablaD=tabla;
        }
    }
}
</script>

<style>

</style>