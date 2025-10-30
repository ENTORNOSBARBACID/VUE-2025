<template>
  <h1>Empleados </h1>

    <!-- <form>
        <label>Introduce ID</label>
        <input type="number"/>
        <button v-on:click.prevent="buscar()">Buscar</button>
    </form> -->
    <select class="form-control w-50 mx-auto m-3" v-model="value" v-on:change.prevent="buscar(value)">
        <option v-for="e in empleados" :key="e" :value="e.idEmpleado">{{ e.apellido }}
        </option>
    </select>
<div v-if="empleado">
  <table class="table table-bordered w-75 m-3 mx-auto">
    <thead>
        <tr>
            <th>Apellido</th>
            <th>Oficio</th>
            <th>Salario</th>
            <th>Departamento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{ empleado.apellido }}</td>
            <td>{{ empleado.oficio }}</td>
            <td>{{ empleado.salario }}</td>
            <td>{{ empleado.departamento }}</td>
        </tr>
    </tbody>
  </table>
  </div>
</template> 

<script>
import Global from '@/Global';
import axios from 'axios';

let url=Global.urlEmpleados;
export default {
name:"EmpleadoDetails",
data(){
    return{
        empleados:[],
        value:"",
        empleado:null
    }
},
mounted(){
    var request="api/empleados";

    axios.get(url+request).then(response=>{
        this.empleados=response.data
    })
},
methods:{
    buscar(v){
        var request="api/empleados/"+v

        axios.get(url+request).then(response=>{
            this.empleado=response.data
        })

        // for(var e of this.empleados){
        //     if(e.idEmpleado==v){
        //         this.empleado=e;
        //     }
        // }
    }
}
}
</script>

<style>

</style>