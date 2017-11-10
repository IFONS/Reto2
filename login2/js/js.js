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
    comprobarTelefonoF();
    comprobarTelefonoM();
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
                url: 'index.html',
                data: email,
                success: function (data)
                {
                    console.log('Llamada OK --> '+email);
                    alert('Llamada OK --> '+email);
                }
            });
        });
}

function comprobarTelefonoM()
{
    var tel2 = $('[name=tel2]');
    function coincideTelf()
    {
        var movil=tel2.val();
        var reg = /^[0-9]{9}$/;

        if( !movil.match(reg) )
        {
            $('#feedMov').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong> Movil no valido.</div>');
        }
        else
        {
            $('#feedMov').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Movil correcto.</div>');
        }

    }

    tel2.keyup(function () {
            coincideTelf();
        }

    )
}

function comprobarTelefonoF()
{
    var tel1 = $('[name=tel1]');
    var tel2 = $('[name=tel2]');
    function coincideTelf()
    {
        var fijo=tel1.val();
        var movil=tel2.val();
        var reg = /^[0-9]{9}$/;

        if( !fijo.match(reg)  )
        {
            $('#feedTel').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong> Telefono no valido.</div>');
        }
        else
        {
            $('#feedTel').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Telefono correcto.</div>');
        }

    }
    tel1.keyup(function () {
            coincideTelf();
        }

    )
    tel2.keyup(function () {
            coincideTelf();
        }

    )
}

function comprobarContraseña()
{
               var pass1 = $('[name=passwordReg]');
               var pass2 = $('[name=passwordReg2]');
               //oculto por defecto el elemento span
               //función que comprueba las dos contraseñas
               function coincidePassword()
               {
                   var valor1 = pass1.val();
                   var valor2 = pass2.val();
                   //muestro el span

                   if(valor1 != valor2 )
                   {
                       $('#feedContras').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong> Las contraseñas no coinciden.</div>');
                   }
                   else if(valor1.length<6 || valor1.length>10)
                   {
                       $('#feedContras').html('<div class="alert alert-danger" role="alert"><strong>Warning!</strong> Longitud incorrecta, minimo 6, maximo 10.</div>');
                   }
                   else
                   {
                       if(valor1.length!=0 && valor1==valor2)
                       {

                           $('#feedContras').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Las contraseñas coinciden.</div>');
                       }
                   }
               }
               //ejecuto la función al soltar la tecla
                pass1.keyup(function()
                {
                    coincidePassword();
                });
                pass2.keyup(function()
                {
                    coincidePassword();
                });




}




