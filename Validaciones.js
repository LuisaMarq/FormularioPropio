let mainForm = document.getElementById("mainForm");
let inputNom = document.getElementById("nombre"); 
let inputEdad = document.getElementById("ed"); 
let inputCodigoPostal= document.getElementById("codigoPostal");

mainForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Se ha enviado el formulario");
    console.log("El nombre es: " + inputNom.value);

     if(isNaN(inputEdad.value) == true){
        console.log("La edad no es numérica");
    } else {
        console.log("La edad es numérica");
    }

    if (inputCodigoPostal.value.length == 5){
        console.log("El código postal es correcto: " + inputCodigoPostal.value);
    }else{
        console.log("Código postal inválido");
    }

    
    let genero = ["masculino","femenino","otro"];
    let inputGenero = document.querySelector("input[name='genero']:checked");
    console.log("El género es: " + inputGenero.value);
    if (genero.indexOf(inputGenero.value) != -1){
        console.log("Tu género es válido");
    }else{
        console.log("El género " + inputGenero.value + " no es una opción válida");
    }

    let intereses = ["tecnologia","deportes","musica","arte"];
    let inputIntereses = document.querySelector("input[name='intereses']:checked");
    console.log("El interés elegido es: " + inputIntereses.value);
    if (intereses.indexOf(inputIntereses.value) != -1){
        console.log("Tu interés elegido es válido");
    }else{
        console.log("El interés " + inputIntereses.value + " no es una opción válida");
    }

});