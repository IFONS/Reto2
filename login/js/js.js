$(document).ready(inicio);
function inicio()
{
    /**
     * funcion para que solo se vea el login al principio
     */
    mostrarLogin()
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
}






function mostrarLogin()
{   /*Oculta los divs que no nos interesa mostrar y muestro el que queremos*/
    $("#thub1").hide();
    $("#thub2").show();

}
function mostrarSingUp()
{   /*Oculta los divs que no nos interesa mostrar y muestro el que queremos*/
    $("#thub2").hide();
    $("#thub1").show();
}


