//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer
// doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak 
//sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

var dbUserEmail = "123"//"deneme@gmail.com"
var dbUserPassword="root"

var email = prompt("E-mail giriniz : ");
var password = prompt("Şifre giriniz : ");

function kontrol(){
    var hak = 4;
    for(var i=1; i <= 4; i++){

        if((email == dbUserEmail) && (password == dbUserPassword)){
            document.write("<br>" + "Bilgiler doğru.. Hoşgeldiniz");
            break;
        } else{
            hak--;
            email = prompt("Kalan Hak : " + (hak+1) + " E-mail giriniz : ");
            password = prompt("Şifre giriniz : ");
                if(hak == 0){              
                        document.write("Hakkınız bitti bloke oldunuz.");
                        break;
                    }
        }
    }
    
}

kontrol();