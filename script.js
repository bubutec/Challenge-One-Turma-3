console.log("TESTE");

var encrypted = CryptoJS.AES.encrypt("Meu amigo estive", "senha");
console.log(encrypted);

var decrypted = CryptoJS.AES.decrypt(encrypted, "senha");
console.log(decrypted);
