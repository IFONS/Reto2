$(document).ready(inicio);
function inicio()
{
    /**
    * funcion para que solo se vea el login al principio
    */
    mostrarLogin();
    /**
    * Carga lo necesario en la cabecera
    */
    cabecera();
    /**
    * todo lo que tenga que hacer en registro
    */
    registro();
    /**
    *todo lo que tenga que hacer en login
    */
    login();

}
function registro()
{
    //comprobar correo()
    comprobarContraseña();
}

function login()
{
    comprobarCorreoL();
}

function cabecera()
{
    /**
     * funcion para que cuando pinchen en login solo se vea el login
     */
    $("#carga1").click
    (
        mostrarLogin
    );
    /**
     * funcion para que cuando pinchen en sign up solo se vea el formulario de sign up
     */
    $("#carga2").click
    (
        mostrarSingUp
    );
    /**
     * funcion para que cuando pinchen en login solo se vea el login
     */
    $("#log").click
    (
        mostrarLogin
    );
    /**
     * funcion para que cuando pinchen en sign up solo se vea el formulario de sign up
     */
    $("#sig").click
    (
        mostrarSingUp
    );
    registro();
    login();
}

function mostrarLogin()
{   /**
 *Oculta los divs que no nos interesa mostrar y muestro el que queremos
 */
$("#thub1").hide();
$("#thub2").show();

}
function mostrarSingUp()
{   /**
 *Oculta los divs que no nos interesa mostrar y muestro el que queremos
 */
$("#thub2").hide();
    $("#thub1").show();
}


function comprobarCorreoL()
{
    $('#emailoLog').on('focusout',
        function (e)
        {
            e.preventDefault(); //parar el submit para que no se envíe el formulario recargando la página.
            var datos = $(this).serialize();
            var email=$('#emailoLog').text(datos)
            //Envía el formulario vía AJAX. Recoge el resultado en la callback.
            $.ajax
            ({
                type: 'POST',
                url: 'server.php',
                data: email,
                success: function (data)
                {
                    console.log('Llamada OK --> '+email);
                    alert('Llamada OK --> '+email);
                }
            });
        });
}
function comprobarContraseña()
{
               var pass1 = $('[name=passwordReg]');
               var pass2 = $('[name=passwordReg2]');
               var confirmacion = "Las contraseñas si coinciden";
               var longitud = "La contraseña debe estar formada entre 6-10 carácteres (ambos inclusive)";
               var negacion = "No coinciden las contraseñas";
               var vacio = "La contraseña no puede estar vacía";
               //oculto por defecto el elemento span
               var span = $('<span></span>').insertAfter(pass2);
               span.hide();
               //función que comprueba las dos contraseñas
               function coincidePassword()
               {
                   var valor1 = pass1.val();
                   var valor2 = pass2.val();
                   //muestro el span
                   span.show().removeClass();
                   //condiciones dentro de la función
                   if(valor1 != valor2)
                   {
                       $('#feedContras').html('<div class="alert alert-danger" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Warning!</strong> Better check yourself, you\'re not looking too good.</div>');
                   }
                   if(valor1.length==0 || valor1=="")
                   {
                       $('#feedContras').html('<div class="alert alert-danger" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Warning!</strong> Better check yourself, you\'re not looking too good.</div>');
                   }
                   if(valor1.length<6 || valor1.length>10)
                   {
                       $('#feedContras').html('<div class="alert alert-danger" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Warning!</strong> Better check yourself, you\'re not looking too good.</div>');
                   }
                   if(valor1.length!=0 && valor1==valor2)
                   {

                       $('#feedContras').html('<div class="alert alert-success" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>SUCCES!</strong> Better check yourself, you\\\'re not looking too good.</div>');
                   }
               }
               //ejecuto la función al soltar la tecla
               pass2.keyup(function()
               {
                   coincidePassword();
               });




}




