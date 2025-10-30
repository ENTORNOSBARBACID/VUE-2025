<template>
  <h1>Customers</h1>
  <label>Buscar por ID</label>
  <input type="text" v-model="id"/>
  <button @click="buscar()">Buscar</button>
  <button @click="todos()">Borrar</button>
  <div v-if="customer" >
     <hr/>
        <p class="text-primary">{{ customer.CustomerID }}</p>
        <p class="text-primary">{{ customer.CompanyName }}</p>
        <p class="text-primary">{{ customer.ContactName }}</p>
    <hr/>
    </div>
  <div>
    <div v-for="c in customers" :key="c">
        <hr/>
        <p class="text-success">{{ c.CustomerID }}</p>
        <p class="text-success">{{ c.CompanyName }}</p>
        <p class="text-success">{{ c.ContactName }}</p>
        <hr/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Global from "../Global";

var url=Global.urlCustomers;

export default {

    data(){
        return{
            id:"",
            customers:[],
            customer:""
        }
    },
    mounted(){
        var request="Customers";
        axios.get(url+request).then(response=> {
            this.customers=response.data.value
            console.log(response.data.value)
        })
    },
    methods:{
        buscar(){
            for(var c of this.customers){
                if(c.CustomerID == this.id.toUpperCase()){
                    this.customer=c
                    console.log(this.customer)
                }
            }
        },
        todos(){
            this.customer=""
        }
    }

}
</script>

<style>

</style>