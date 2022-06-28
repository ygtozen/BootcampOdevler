//ÖDEV
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?
//3.adım: kaç tane tek  sayı var ?
//4.adım: kaç tane çift  sayı var ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise çalışmasın (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun 

var sayi = prompt("Bir sayı giriniz : ");

//1.adım: kaç tane sayı var 
document.writeln("Kaç tane sayı var" + "<br>");
function adim1(sayi){
    document.writeln("Kaç tane sayı var : " + sayi + "<br>");
}
adim1(sayi);
document.writeln("-------------------------------------------------------------- <br>");

//2.adım: sayı toplamları var ?
document.writeln("Sayı toplamlar " + "<br>");
function adim2(sayi){
    var sum = 0;
    for(var i=1; i <= sayi; i++){
    sum = sum + i;
    } 
    document.writeln("Toplam : " + sum + "<br>");
}
adim2(sayi);
document.writeln("-------------------------------------------------------------- <br>");

//3.adım: kaç tane tek  sayı var ?
document.writeln("Tek sayılar" + "<br>");
function adim3(sayi){ 
    var tekSayi = 0;
    for(var i=1; i <= sayi; i++){
        if(i % 2 == 1){
            tekSayi += 1;
        }
    }
    document.writeln("Tek Sayı Sayısı : " + tekSayi + "<br>");
    
}
adim3(sayi);


function tekSayiToplami(sayi){
    sum  = 0;
    for(var i=0; i <= sayi; i++){
        if(i % 2 == 1){
            sum = sum + i;
        }
    }

    document.writeln("Tek sayılar toplamı : " + sum + "<br>");
}
tekSayiToplami(sayi);

function tekSayilar(sayi){
    document.write("Tek sayılar : ");
    for(var i=0; i <= sayi; i++){
        if(i % 2 == 1){
            document.writeln(i);
        }
    }
}
tekSayilar(sayi);
document.writeln("<br> -------------------------------------------------------------- <br>");



//4.adım: kaç tane çift  sayı var ?
document.writeln("Çift sayılar " + "<br>");
function adim4(sayi){
    var ciftSayi = 0;
    for(var i=1; i <= sayi; i++){
        if(i % 2 == 0){
            ciftSayi += 1
        }
    }
    document.writeln("Çift Sayı Sayısı : " + ciftSayi + "<br>");
};
adim4(sayi);


function ciftSayilarToplam(sayi){
    sum  = 0;
    for(var i=0; i <= sayi; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }

    document.writeln("Çift sayılar toplamı : " + sum + "<br>");
}
ciftSayilarToplam(sayi);

function ciftSayilar(sayi){
    document.write("Çift sayılar : ");
    for(var i=1; i <= sayi; i++){
        if(i % 2 == 0){
            document.writeln(i);
        }
    }
}
ciftSayilar(sayi);

document.writeln(" <br> -------------------------------------------------------------- <br>");

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
document.writeln("7 olmadan sayılar"+ " <br>");
function adim5(sayi){
    for(var i=1; i <= sayi; i++){
        if(i == 7){
            continue;
        }
        document.write(" " + i)
    }
    
}
adim5(sayi);
document.writeln(" <br> -------------------------------------------------------------- <br>");


//Eğer bitiş sayısı 100 fazla ise çalışmasın (break)
document.writeln("Girilen sayı 100'den büyükse döngü durur" + "<br>");
function adim6(sayi){
    for(var i=1; i <= sayi; i++){
        
        if(i > 100){
            break;
        }
        document.write(" " + i)
    }
    
}
adim6(sayi);
document.writeln(" <br> -------------------------------------------------------------- <br>");

//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
document.writeln("<br>");
function adim7(sayi){
    if(sayi < 1){
        alert("1 den daha büyük bir sayı giriniz")
    }
}
adim7(sayi)

//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun 
document.writeln("Sayı 44 ise döngü çalışmaz"+" <br>");
function adim8(sayi){
    for(var i=1; i <= sayi; i++){
        if(sayi == 44){
            break;
        } else{
            document.write(i+"-");
        }
    }
}
adim8(sayi);
