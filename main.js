// ---DECLARACIONES PARA EL USO DE VARIABLES
let cantidad = document.getElementById('cantidad');//obtiene la cantidad o cifra ingresada en el input "Cantidad"
let boton  = document.getElementById('generar');//nos permite saber y dar funcionalidad al button
let contrasena = document.getElementById('contrasena');//variable para identificar el campo donde va el texto que será la constraseña

//tipo de variable que nos permite tener un valor constante (que no cambiara)
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// ---PRUEBAS DE TEXTO Y VALORES
let texto = "Prueba de texto";
console.log(typeof texto + ' ' + texto + ' ' + typeof cantidad);//funcion de JS para mostrar valores en consola


// ---FUNCIONALIDADES DE LA APLICACIÓN
function generar(){//funcion que dará la funcionalidad al boton (todo lo realizado aquí se activará al momento de dar click al botón)

    let numeroDigitado = parseInt(cantidad.value);//metodo para hacer conversión del tipo de valor que arroja la variable a numero
    // console.log(numeroDigitado);

    // if(numeroDigitado < 8){ //validacion de la cantidad ingresada por el usuario
    //     alert("La cantidad de caracteres tiene que ser mayor que 8");//funcion de Javascript que manda un mensaje flotante en el navegador
    // }

    let password = '';//variable vacio para asignar valor más adelante

    //bulce que sera repetido las veces que según cumpla la condición asignada
    for(let i=0; i < numeroDigitado; i++){//el bucle dice que se tiene que repetir hasta que el contador ( "i" ) sea menor al numero que ingreso el usuario guardado en la variable

        /*
            variable que almacena caracter aleatorio
            Math.floor -> funcion de JS para redondear un número con decimal para generar un número entero
            Math.random -> función de JS que permite tomar un caracter aleatorio
            .length - > función de JS que permite saber la longitud númerica del valor guardado en la variable
        */
        let caracterAleatorio = cadenaCaracteres [Math.floor( Math.random() * cadenaCaracteres.length)];
        // console.log(caracterAleatorio);

        password+= caracterAleatorio;// "+=" metodo de concatenación de resultado de cada bucle realizado en este caso cada caracter seleccionado

    }

    //Validación de contraseña
    if(password.length < 8){
        // alert("La cantidad de caracteres tiene que ser mayor que 8");//funcion de Javascript que manda un mensaje flotante en el navegador
        document.getElementById('nivel').outerHTML = "<h3 class='nivel' id='nivel'><p style='color: black;'>NO VÁLIDA</p></h3>";
        document.getElementById('alert_nivel').outerHTML = "<h3 class='alert_nivel' id='alert_nivel' style='background-color: red;'>LA CONTRASEÑA DEBE CONTENER AL MENOS 8 CARACTERES</h3>";


    }else{
        document.getElementById('alert_nivel').outerHTML = "<h3 class='alert_nivel_no' id='alert_nivel'>VERIFICADO</h3>";

        /** 
         * ! -> negación, usado para que la condición se cumpla si NO cumple la condición
         * /[A-Z]/ || /[0-9]/ -> epresión regular que busca cualquier caracter que sea especificado en el rango
         * .test -> método que devuelve true si encuentra alguna coincidenia de la expresión
        */
        
        if(!/[!@#$%^&*()]/.test(password) || !/[A-Z]/.test(password) && !/[0-9]/.test(password)){
            
            document.getElementById('nivel').outerHTML = "<h3 class='nivel' id='nivel'><p style='color: red;'>Débil</p></h3>"
    
        }else if(!/[!@#$%^&*()]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)){
    
            document.getElementById('nivel').outerHTML = "<h3 class='nivel' id='nivel'><p style='color: blue;'>Medio</p></h3>"
    
        }else{
    
            document.getElementById('nivel').outerHTML = "<h3 class='nivel' id='nivel'><p style='color: green;'>Fuerte</p></h3>"
        }
    }



    
    console.log("Password generada: " + ' ' + password);
    contrasena.value = password;// función de JS para asignar el valor de la variable generada enn el campo obtenido y almacenado en otra variable
}


// Funcion para limpiar el input de contraseña

function limpiar(){
    document.getElementById('contrasena').value = "";
    document.getElementById('alert_nivel').outerHTML = "<h3 class='alert_nivel_no' id='alert_nivel'>VERIFICADO</h3>";
    document.getElementById('nivel').outerHTML = "<h3 class='nivel' id='nivel'><p></p></h3>";
    document.getElementById('cantidad').value = "";

}

