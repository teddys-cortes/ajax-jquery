ejecutar = $("#botton1");

ejecutar.click(
    function () {
        datos1 = $("#caja1").val();
        datos2 = $("#caja2").val();


        $.ajax({

            dataType: "json",
            type: "POST",
            url: "https://reqres.in/api/users",
            data: {
                name: datos1,
                job: datos2
            }
            
        }).done(function (objeto) {
            
            $("#respuesta1").html(objeto.id)
            $("#respuesta2").html(objeto.name)
            $("#respuesta3").html(objeto.job)
            $("#respuesta4").html(objeto.createdAt)


        }).fail(function () {
            console.log("algo salio mal")


        }).always(function () {
            console.log("siempŕe se ejecuta")
        });

    }
)