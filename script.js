function encriptar(){
    let e = document.getElementById("entrada").value;
    if(e != ""){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        e = e.toLowerCase();
        for(let i = 0; i < matrizCodigo.length; i++){
            if(e.includes(matrizCodigo[i][0])){
                e = e.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
    }
    document.getElementById("saida").value = e;
}

function descriptar(){
    let d = document.getElementById("entrada").value;
    if(d != ""){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        d = d.toLowerCase();
        for(let i = 0; i < matrizCodigo.length; i++){
            if(d.includes(matrizCodigo[i][1])){
                d = d.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
    }
    document.getElementById("saida").value = d;
}
