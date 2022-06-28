//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

var derece = Number(prompt("Lütfen derece giriniz : "));
function hesapla(){
    var fahrenheit = (derece * 9 / 5)+32;
    document.write("<br>" + "Fahrenheit : " + fahrenheit);
}
hesapla();
