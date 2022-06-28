// -----------------------------------
// ÖDEV..
// bilgisayar tarafından rastgele rastgele oluşturulmuş kullanıcı tarfaından
// bitiş sayısına göre sayılar oluşturulsun. Bu sayıları bir diziye atama
// yapalım. 1 ile 10 arasında
// bu sayılardan ilk eleman -> dizi[0]
// bu sayılardan son eleman
// bu sayıların küçükten büyüğe sıralama
// bu sayıları büyükten küçüğe sıralama
// bu sayıların toplamları
// bu sayıların çift sayı toplamları
// bu sayıların tek sayı toplamları
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım

var bitis = prompt("Bitis sayısını giriniz: ")
var sayilar = [];

for(var i=1; i <= bitis; i++){
    var sayi = Math.floor(Math.random() * 10) + 1;
    sayilar.push(sayi);
}
document.write("<br>" + sayilar);

// 1- Dizinin ilk elemanı
document.write("<br>" + "İlk eleman : " + sayilar[0])

// 2- Dizinin son elemanı
document.write("<br>" + "Son eleman : " + sayilar[sayilar.length-1])

// 3- Sayıların küçükten büyüğe sırlanması
var temp = sayilar.sort()
document.write("<br>" + "Küçükten büyüğe sıralama : " + temp)

// 4 Sayıların  büyükten küçüğe sırlanması
var temp2 = sayilar.sort().reverse();
document.write("<br>" + "Büyükten küçüğe sıralama : " + temp2)

// 5- Bu sayıların toplamı
var sum = 0;
for(var i=0; i <= sayilar.length; i++){
    if (isNaN(sayilar[i])) {
        continue;
    }
    sum = sum + Number(sayilar[i]);
}
document.write("<br>" + "Toplam : " + sum);

// 6- Çift sayıların topla
ciftSayilar = 0;
for(var i=0; i <= sayilar.length; i++){
    if(sayilar[i] % 2 == 0){
        ciftSayilar = ciftSayilar + Number(sayilar[i]);
    } 
}
document.write("<br>" + "Çift sayı toplamı : "+ ciftSayilar);
 
// 7- Tek sayıların toplamı
tekSayilar = 0;
for(var i=0; i <= sayilar.length; i++){
    if(sayilar[i] % 2 == 1){
        tekSayilar = tekSayilar + Number(sayilar[i]);
    } 
}
document.write("<br>" + "Tek sayı toplamı : "+ tekSayilar);

var yeniDizi = [];
toplam = 0;
for(var i=0; i < sayilar.length; i++){

    var number = Number(sayilar[i] + 1);
    yeniDizi.push(number)
}
document.write("<br>" + "Yeni Dizi : " + yeniDizi)


