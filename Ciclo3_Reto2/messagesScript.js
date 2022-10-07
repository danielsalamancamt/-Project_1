let myURLMessage='https://gda7be1c46734d6-ck1a82e5ie6a36o6.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message';

function getMessages(){
    $.ajax({    
        url : myURLMessage,
        type : 'GET',
        dataType : 'json',
        success : function(messages) {
            let cs=messages.items;
            $("#messages").empty();
            for(let i=0;i<cs.length;i++){
                let k=cs[i].id+" "+cs[i].messagetext+" <button onclick='deleteMessage("+cs[i].id+")'>Borrar</button>";
                k+=" <button onclick='getDetailMessage("+cs[i].id+")'>Actualizar</button><br>"
                $("#messages").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getMessageInfo(){
    let idMessage=$("#idMessage").val();
    let textMessage=$("#textMessage").val();

    let message={
        id:idMessage,
        messagetext:textMessage
    };
    return message;
}

function cleanInputs(){
    $("#idMessage").val("");
    $("#textMessage").val("");
}

function saveMessage(){
    let data=getMessageInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({    
        url : myURLMessage,
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(messages) {
            cleanInputs();
            getMessages();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteMessage(idMessage){
    let data={id:idMessage};
    let dataToSend=JSON.stringify(data);
    $.ajax({    
        url : myURLMessage,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(messages) {
            cleanInputs();
            getMessages();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateMessage(){
    let data=getMessageInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({    
        url : myURLMessage,
        type : 'PUT',
        contentType : 'application/json',
        data:dataToSend,
        success : function(messages) {
            cleanInputs();
            getMessages();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailMessage(idMessage){
    $.ajax({    
        url : myURLMessage+"/"+idMessage,
        type : 'GET',
        dataType : 'json',
        success : function(messages) {
            let cs=messages.items;
            $("#idMessage").val(cs[0].id);
            $("#textMessage").val(cs[0].messagetext);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}