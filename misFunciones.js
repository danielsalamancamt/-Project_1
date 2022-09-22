function sumar(){
    let x=parseInt($("#numA").val());
    let y=parseInt($("#numB").val());
    let z=x+y;
    console.log("el resultado es "+z)
}
function llamado(){
    $.ajax({
        url: 'https://gda7be1c46734d6-ck1a82e5ie6a36o6.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/g43/g43',
        //data : { id : 123 },
        type: 'GET',
        dataType: 'json',
        success: function(resultado) {
            console.log(resultado.items);
            $("#respuestas").append(resultado.items[0].name);
            /*$('<h1/>').text(json.title).appendTo('body');
            $('<div class="content"/>')
            .html(json.html).appendTo('body');*/
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }/*,
        complete : function(xhr, status) {
            alert('Petición realizada');
        }*/
        });
}