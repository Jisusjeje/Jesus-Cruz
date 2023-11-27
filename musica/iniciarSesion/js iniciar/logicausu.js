function ObtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('lisraUsuarios'));

    if(listaUsuarios == null){
        listaUsuarios=
        [
['1','Pabs','Monestel','pablo.monestel@gmail.com','1pablo9','1987-10-12','1'],
['2','Olman','Santamaria','Olaman@gmail.com','1olman9','1992-04-17','2']
        ]
    }
    return listaUsuarios;
}
function validarCredenciales(PCorreo , pContrasenna){
    var listaUsuarios =ObtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i<listaUsuarios.length; i++){
        if(PCorreo == listaUsuarios[i][3]&&pContrasenna==listaUsuarios[i][4]){
            bAcceso=true;
            sessionStorage.setItem('usuarioActivo',listaUsuarios[i][1]+' '+listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',listaUsuarios[i][6]);
        }
    }
    return bAcceso;
}