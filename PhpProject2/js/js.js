$(document).ready(inicio);
function inicio()
{
    registro();
    enviar();

}
function registro()
{
    //comprobar correo()
    
    coorreo();
    comprobarApolo();
    comprobarContraseña();
    comprobarNombre();
    comprobarApel1();
    comprobarApel2();
    comprobarCP();
    comprobarTelefonoF();
    comprobarTelefonoM();
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

/**
 * 
 * @returns {undefined}*
 * var erTel=/^[0-9]{9}$/;
                    var erZipo=/^[0-9]{5}$/;
                    var erDni=/^[0-9]{9}[a-zA-Z]{1}$/;
var erEmail=/^[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;
 */
function enviar()
{
    //if(correo correcto)
    //else
    //mensaje fallo
    /** $('#register').on('submit', function () {
				
        var datos = $(this).serialize();
        //Envía el formulario vía AJAX. Recoge el resultado en la callback.
        $.ajax(
        {
            type: 'POST',
            url: './opsbd/usuarioBD.php',
            data: datos,
            success: function (data) 
            {
              console.log('Llamada OK --> '+data);
              alert('Llamada OK --> '+data);
            }
        });
    });*/
    $('#register').on('submit', function (e) {
				//validar lo que se quiera aquí:
				console.log('validado');
				alert('todo está OK! Ahora se enviará el formulario');
				return true; //Tras el "return true" se enviará el formulario, recargándose la página.
				//return false para no continuar y enviar el formulario.
				
			});
}
function validar()
{
    
    try
    {
        
        $(':input[type=text]').on
        (
            {
                keyup:function()
                {
                    alert('sgew');
                    
                    var erText=/[a-zA-Z]+$/;
                    alert($(this).text());
                    $(".textu").each(function (){
                                    alert($(this).text());
                    });
                            
                            if(!erText.test($(this).val()))
                            {
                                alert("SGw");
                                $('.feedtext').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong>Correo no valido.</div>');
                            }
                       
                    
                }
            }
        );
    }
    catch(e)
    {
        
    }
}
function coorreo()
{
    var correo = $('[name=emailoReg]');
    function coincideEmilio()
    {
        //e.preventDefault();
        var emailo =correo.val();
        var datos=correo.serialize();
        var reg = /^[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;
//[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
        if( !emailo.match(reg) )
        {
            $('#feedEmilio').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong>Correo no valido.</div>');

        }
        else
        {
            
            $.ajax
            ({
                type: 'POST',
                url: './opsbd/usuarioBD.php',
                data: datos,
                success: function (data)
                {
                    $('#feedEmilio').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Correo correcto.</div>');
                    console.log('Llamada OK --> '+data);
                    alert('Llamaa OK --> '+data);
                }
            });
            
        }
            

    }

    correo.blur(function () {

        coincideEmilio();
        }

    )
}
function comprobarApolo()
{
    var apodo = $('[name=alias]');
    function coincideAple()
    {
        var apolo =apodo.val();
        var reg = /[a-zA-Z]+$/;

        if( !apolo.match(reg) )
        {
            $('#feedAlias').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong> TU apolo no silve.</div>');
        }
        else
        {
            $('#feedAlias').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Apolo colecto.</div>');
        }

    }

    apodo.blur(function () {
            coincideAple();
        })
}



function comprobarCP()
{
    var zip = $('[name=zipo]');
    function coincideZipo()
    {
        var cp =zip.val();
        var reg = /^[0-9]{5}$/;

        if( !cp.match(reg) )
        {
            $('#feedZipo').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong> CP no valido.</div>');
        }
        else
        {
            $('#feedZipo').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> CP correcto.</div>');
        }

    }
    zip.keyup(function () {
            coincideZipo();
        }

    )
}



function comprobarNombre()
{
    var nombre = $('[name=nombre]');
    function coincideNombre()
    {
        var valor=nombre.val();
        var reg = /^[a-zA-Z]+$/;

        if( !valor.match(reg) )
        {
            $('#feedNombre').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong>Nombre no valido.</div>');
        }
        else
        {
            $('#feedNombre').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Nombre correcto.</div>');
        }

    }

    nombre.keyup(function () {
            coincideNombre();
        }

    )
}

function comprobarApel1()
{
    var ape1 = $('[name=ape1]');
    function coincideApel1()
    {
        var apel1=ape1.val();
        var reg = /^[a-zA-Z]+$/;

        if( !apel1.match(reg) )
        {
            $('#feedApe1').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong>Nombre no valido.</div>');
        }
        else
        {
            $('#feedApe1').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Nombre correcto.</div>');
        }

    }

    ape1.keyup(function () {
            coincideApel1();
        }

    )
}

function comprobarApel2()
{
    var ape2 = $('[name=ape2]');
    function coincideApel2()
    {
        var apel2=ape2.val();
        var reg = /^[a-zA-Z]+$/;

        if( !apel2.match(reg))
        {
            $('#feedApe2').html('<div class="alert alert-danger" role="alert" > <strong>Warning!</strong>Nombre no valido.</div>');
        }
        else
        {
            $('#feedApe2').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Nombre correcto.</div>');
        }

    }

    ape2.keyup(function () {
            coincideApel2();
        }

    )
}

function comprobarTelefonoF()
{
    var tel1 = $('[name=tel1]');

    function coincideTelf()
    {
        var fijo=tel1.val();

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

}

function comprobarTelefonoM()
{

    var tel2 = $('[name=tel2]');
    function coincideMov()
    {

        var movil=tel2.val();
        var reg = /^[0-9]{9}$/;

        if( !movil.match(reg)  )
        {
            $('#feedMov').html('<div class="alert alert-danger" role="alert"> <strong>Warning!</strong> Movil no valido.</div>');
        }
        else
        {
            $('#feedMov').html('<div class="alert alert-success" role="alert"><strong>SUCCES!</strong> Movil correcto.</div>');
        }

    }

    tel2.keyup(function () {
            coincideMov();
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




