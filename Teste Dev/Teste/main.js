

function selecionarMensal() {
    document.getElementById("headerCinzaMensal").className = "header__colorido";
    document.getElementById("mainCinzaMensal").className = "main__colorido";
    document.getElementById("periodoMensal").className = "descricao__colorido";
    document.getElementById("descricaoMensal").className = "descricao__colorido";
    
}

function selecionarSemestral() {
    document.getElementById("headerCinzaSemestral").className = "header__colorido";
    document.getElementById("mainCinzaSemestral").className = "main__colorido";
    document.getElementById("periodoSemestral").className = "descricao__colorido";
    document.getElementById("descricaoSemestral").className = "descricao__colorido";
}

function selecionarAnual() {
    document.getElementById("headerCinzaAnual").className = "header__colorido";
    document.getElementById("mainCinzaAnual").className = "main__colorido";
    document.getElementById("periodoAnual").className = "descricao__colorido";
    document.getElementById("descricaoAnual").className = "descricao__colorido";
}

/*--------------------------------------------------------------------------------*/ 


function voltarMensal() {
    document.getElementById("headerCinzaMensal").className = "pacotes__header";
    document.getElementById("mainCinzaMensal").className = "pacotes__main";
    document.getElementById("periodoMensal").className = "pacotes__descricao";
    document.getElementById("descricaoMensal").className = "pacotes__descricao";
}

function voltarSemestral() {
    document.getElementById("headerCinzaSemestral").className = "pacotes__header";
    document.getElementById("mainCinzaSemestral").className = "pacotes__main";
    document.getElementById("periodoSemestral").className = "pacotes__descricao";
    document.getElementById("descricaoSemestral").className = "pacotes__descricao";
}

function voltarAnual() {
    document.getElementById("headerCinzaAnual").className = "pacotes__header";
    document.getElementById("mainCinzaAnual").className = "pacotes__main";
    document.getElementById("periodoAnual").className = "pacotes__descricao";
    document.getElementById("descricaoAnual").className = "pacotes__descricao";
}



