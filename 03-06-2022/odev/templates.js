//Ödev kullanıcı tarafında girilen şifre ve şifre doğrulama
//validation password -repassword

var sifre1 = prompt("Lütfen şirenizi giriniz : ");
var sifre2 = prompt("Lütfen şirenizi tekar giriniz : ");

function sifreDogrulama(sifre1, sifre2){
    if(sifre1 == sifre2){
        document.write("<br>" +"Şifre Doğru");
    } else{
        document.write("<br>" + "Şifre Yanlış");
    }
}
sifreDogrulama(sifre1, sifre2)