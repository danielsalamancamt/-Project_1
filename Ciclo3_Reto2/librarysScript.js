let myURLLibrary='https://gda7be1c46734d6-ck1a82e5ie6a36o6.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library';

function getLibrarys(){
    $.ajax({    
        url : myURLLibrary,
        type : 'GET',
        dataType : 'json',
        success : function(librarys) {
            let cs=librarys.items;
            $("#librarys").empty();
            for(let i=0;i<cs.length;i++){
                let k=cs[i].id+" "+cs[i].target+" "+cs[i].capacity+" "+cs[i].category_id+" "+cs[i].name+" <button onclick='deleteLibrary("+cs[i].id+")'>Borrar</button>";
                k+=" <button onclick='getDetailLibrary("+cs[i].id+")'>Actualizar</button><br>"
                $("#librarys").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getLibraryInfo(){
    let idLibrary=$("#idLibrary").val();
    let targetLibrary=$("#targetLibrary").val();
    let capacityLibrary=$("#capacityLibrary").val();
    let categoryLibrary=$("#categoryLibrary").val();
    let nameLibrary=$("#nameLibrary").val();

    let library={
        id:idLibrary,
        target:targetLibrary,
        capacity:capacityLibrary,
        category_id:categoryLibrary,
        name:nameLibrary
    };
    return library;
}

function cleanInputs(){
    $("#idLibrary").val("");
    $("#targetLibrary").val("");
    $("#capacityLibrary").val("");
    $("#categoryLibrary").val("");
    $("#nameLibrary").val("");
}

function saveLibrary(){
    let data=getLibraryInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({    
        url : myURLLibrary,
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(librarys) {
            cleanInputs();
            getLibrarys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteLibrary(idLibrary){
    let data={id:idLibrary};
    let dataToSend=JSON.stringify(data);
    $.ajax({    
        url : myURLLibrary,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(librarys) {
            cleanInputs();
            getLibrarys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateLibrary(){
    let data=getLibraryInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({    
        url : myURLLibrary,
        type : 'PUT',
        contentType : 'application/json',
        data:dataToSend,
        success : function(librarys) {
            cleanInputs();
            getLibrarys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailLibrary(idLibrary){
    $.ajax({    
        url : myURLLibrary+"/"+idLibrary,
        type : 'GET',
        dataType : 'json',
        success : function(librarys) {
            let cs=librarys.items;
            $("#idLibrary").val(cs[0].id);
            $("#targetLibrary").val(cs[0].target);
            $("#capacityLibrary").val(cs[0].capacity);
            $("#categoryLibrary").val(cs[0].category_id);
            $("#nameLibrary").val(cs[0].name);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}