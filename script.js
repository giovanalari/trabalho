var nomeGlobal;
var mensagemGlobal;

function conferirMensagemWhatsApp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    
    nomeGlobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("confnome").textContent = nome;
    document.getElementById("confmsg").textContent = mensagem;
}

function enviarzap(){
    var numerotelefone = "5541920004260"
    
    var linkwhatsApp = "https://wa.me/" + 
    numerotelefone + 
    "?text=Nome:" + 
    nomeGlobal + 
    " - " + 
    mensagemGlobal;
    window.open(linkwhatsApp, "_blank")
}
