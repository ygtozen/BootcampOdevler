// ÖDEV-1
// Kullanıcıda tarafından aldığımız 2 tane sayının

/*
number1 = prompt("1.sayıyı giriniz : ");
number2 = prompt("2.sayıyı giriniz : ");

// s1-) Bu sayılardan en büyüğü nedir ?
document.write("En büyük sayı : " + Math.max(number1,number2) + "<br>")

// s2-) Bu sayılardan en küçükü nedir ?
document.write("En küçük sayı : " + Math.min(number1,number2) + "<br>" );

// s3-) Bu sayılardan en küçüğünün karekökü nedir ?
document.write("En küçük sayının karekökü : " + Math.sqrt(Math.min(number1,number2)) + "<br>");

// s4-) Bu sayılardan en küçüğünün karekökünün üste yuvarlıyalım nedir ?
document.write("En küçük sayının karekökünü üste yuvarla : " + Math.ceil(Math.sqrt(Math.min(number1,number2))) + "<br>");

// s5-) Bu sayılardan en büyüğünün mutlak nedir ?
document.write("En büyük sayının mutlak değeri : " + Math.abs(Math.max(number1,number2)) + "<br>");

// s6-) Bu sayılardan en büyüğünün üst taban en büyüğü alt taban şeklinde üstünü alalım
document.write("Alt taban : " + Math.abs(Math.min(number1,number2)) + "<br>", "Üst taban : " + Math.abs(Math.max(number1,number2)));
*/

///////////////////////////////////////////////////////////////////
// ÖDEV-2

// Kullanıcı tarafından girilen bir kelimenin
// var kelime = prompt("Kelime giriniz");

// //S-1) Kaç karakterlidir ?
// document.write("Kaç kelime : " + kelime.length + "<br>");

// //S-2) boşluklar alınarak Kaç karakterlidir ?
// document.write("Boşluklar alınarak kaç kelime : " + kelime.trim().length + "<br>");

// //S-3) bütün kelimeyi küçük harfle göstermek ?
// document.write("Bütün harfler küçük : " + kelime.toLowerCase() + "<br>");

// //S-4) bütün kelimeyi büyük harfle göstermek ?
// document.write("Bütün harfler büyük : " + kelime.toUpperCase() + "<br>");

// //S-5) ilk harf nedir  ?
// document.write("İlk harf : " + kelime.charAt(0) + "<br>")

// //S-6) girdiğiniz kelime java ile başlıyor mu  ?
// document.write("Girilen kelime java ile mi başlıyor : "+kelime.startsWith("ava") + "<br>");

// //S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
// document.write("Girilen kelimenin sonuna ben js öğreniyorum yaz : " + kelime.concat(" ben js öğreniyorum") + "<br>");

// //S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
// document.write("0-4 index : " + kelime.substring(0,4) + "<br>");

// //S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ? 
// var yeniKelime = prompt("Başka bir kelime giriniz : ")
// document.write("Yeni kelime ile değiştir : " + kelime.replace(kelime, yeniKelime) + "<br>");

///////////////////////////////////////////////////////////////////
// ÖDEV-3

// Adınızı ve Soyaınızı json objesine ekleyip daha sonra bu json objesini String'e çevirip daha sonra adınızı ve soyadınızı
// document.write ile ekrana yazdır. ip ucu : JSON.stringf ve sub string

var namesurname = {
    "name":"Yiğit",
    "surname":"Özen"
}

var nameSurnameToString = JSON.stringify(namesurname);

var name = nameSurnameToString.substring(9,14);
var surname = nameSurnameToString.substring(27,31);
document.write("Adım : " + name + " <br> Soyadım : " + surname + "<br>");

