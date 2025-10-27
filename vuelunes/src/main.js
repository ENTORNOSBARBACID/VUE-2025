import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app=createApp(App);

app.config.globalProperties.$filters={
    collatz(numero){
        var data=[];

        if(numero==1){
            return ("<h3 style='color:red'>" + numero + "</h3>")
        }
        
        while(numero!==1){
           if (numero % 2 == 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }

            if (numero % 2 == 0) {
                data.push("<h3 style='color:green'>" + numero + "</h3>");
            } else {
                data.push("<h3 style='color:red'>" + numero + "</h3>");
            }
            
        }
        return data.join('')
    },
    getOperacion(numero, multi){
        
        return numero + " * "+ multi + " = "
    },
    getResultado(numero, multi){
         
        return numero * multi
    }
}
app.use(router).mount('#app')
