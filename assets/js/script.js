
window.addEventListener('load',function(event){

    var formulario = document.querySelector('#formulario');
    var mensajeDatos = document.querySelector('#alerta');

    mensajeDatos.style.display = 'none';

    var error_nombre         = document.querySelector('#error_nombre');
    var error_apellidos      = document.querySelector('#error_apellidos');
    var error_rut            = document.querySelector('#error_rut');
    var error_edad           = document.querySelector('#error_edad');
    var error_correo         = document.querySelector('#error_correo');
    var error_especialidad   = document.querySelector('#error_especialidad');
    var error_fecha          = document.querySelector('#error_fecha');
    var error_hora           = document.querySelector('#error_hora');

    error_nombre.style.display       = 'none';
    error_apellidos.style.display    = 'none';
    error_rut.style.display          = 'none';
    error_edad.style.display         = 'none';
    error_correo.style.display       = 'none';
    error_especialidad.style.display = 'none';
    error_fecha.style.display        = 'none';
    error_hora.style.display         = 'none';


    formulario.addEventListener('submit',function(event){
        var nombre          = document.querySelector('#nombre').value;
        var apellidos       = document.querySelector('#apellidos').value;
        var rut             = document.querySelector('#rut').value;
        var edad            = document.querySelector('#edad').value;
        var correo          = document.querySelector('#correo').value;
        var especialidad    = document.querySelector('#especialidad').value;
        var fecha           = document.querySelector('#fecha').value;
        var hora            = document.querySelector('#hora').value;

     const letras = /\D/gim;
     //validacion básica de nombre//
     if(!nombre.match(letras)){
         error_nombre.innerHTML     = 'El nombre no es Válido';
         error_nombre.style.display = 'block';
         return false;
        }else{
         error_nombre.style.display = 'none';
        }

     //validacion básica de apellidos//
     if(!apellidos.match(letras)){
         error_apellidos.innerHTML     = 'Los apellidos ingresados no son Válidos';
         error_apellidos.style.display = 'block';
         return false;
        }else{
         error_apellidos.style.display = 'none';
        }


     //rut//

     //validacion básica de Edad//
     if(edad == null || edad <=0 || isNaN(edad)){
         error_edad.innerHTML     = 'La ingresada edad no es Válida';
         error_edad.style.display = 'block';
         return false;
        }else{
         error_edad.style.display = 'none';
        }

     //validacion basica de correo
        //  function validar_correo(correo) {
        //      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //      return regex.test(correo) ? true : false;
        //  }
        //  if(validar_correo)

        // if(!correo.match(mail)){
        //     
        //     return false;
         //     }else{
        //     error_correo.style.display  = 'none';
        //     }

      
        


     




    });

});