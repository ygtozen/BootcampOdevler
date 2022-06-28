//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

var password = prompt("Şifre giriniz : ");
var repassword = prompt("Şifrenizi tekrar giriniz : ");

function kontrol(password, repassword){
    if(password == repassword){
        document.write("<br>" + "Şifreler doğru" 
        + "<br> Password : " + password + " <br> Repassword : " + repassword);
    } else{
        document.write("<br>" + "Şifreler Yanlış" 
        + "<br> Password : " + password + " <br> Repassword : " + repassword);
    }
}
kontrol(password, repassword);