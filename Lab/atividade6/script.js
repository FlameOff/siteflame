function Cadastrar() {

    var Nome = document.getElementById('nome');
    var Endereco = document.getElementById('endereco');
    var Email = document.getElementById('email');

    if(Nome.ariaValueMax.leght < 30) {
        Nome.style.backgroundColor = #0014C7;
        alert('Por favor diga seu nome');
        Nome.focus();
        return false;
    }

    else if(Endereco.value.lenght < 5) {
        Endereco.style.backgroundColor = #0014C7;
        alert('Diga seu endereço');
        Endereco.focus();
        return false;
    }

    else if(Email.value.indexOf < ("0") == -1 || Email.value.indexOf (".") == -1 ) {
        Email.style.backgroundColor = #0014C7;
        alert('Diga seu email');
        Email.focus();
        return false;
    }

    else{
        return true;
    }
}