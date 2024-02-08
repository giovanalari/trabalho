var nomeGlobal;
var mensagemGlobal;

function conferirMensagemWhatsApp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    nomeGlobal = nome;
    mensagemGlobal = mensagem;


    document.getElementById("cofnome").textContent = nome;
    document.getElementById("cofmsg").textContent = mensagem;
}

    function enviarzap(){
     var numerotelefone = "5541996462110"
    
     var linkwhatsApp = "https://wa.me/" +
     numerotelefone +
      "?text=nome:" +
       nomeGlobal +
        "-" +
     mensagemGlobal;
    window.open(linkwhatsApp, "_blank")
}
