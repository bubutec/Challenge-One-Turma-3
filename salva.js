const entrada = document.getElementById("entrada");
const saida = document.getElementById("saida");

function btnEncriptar(){
    const encriptado = encriptar(entrada.value);
    saida.value = encriptado;
}

function btnDesencriptar(){
    const desencriptado = desencriptar(saida.value);
    saida.value = desencriptado;
}

function encriptar(e){
    console.log("desencriptar");
    if(e != ""){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        e = e.toLowerCase();
        for(let i = 0; i < matrizCodigo.length; i++){
            if(e.includes(matrizCodigo[i][0])){
                e = e.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
    }
    return e;
}

function desencriptar(d){
    console.log("desencriptar");
    if(d != ""){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        d = d.toLowerCase();
        for(let i = 0; i < matrizCodigo.length; i++){
            if(d.includes(matrizCodigo[i][1])){
                d = d.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
    }
    return d;
}
