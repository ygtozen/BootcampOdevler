//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım
// bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan 
// küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

function sayiTahmin(){
    var hak = 5;
    var uret = Math.floor(Math.random() * 9) + 1;
    var sayac = 1;
    
    document.write("Üretilen sayı : " + uret)

    for(var i=hak; i > 0; i--){
        var tahmin = prompt(uret + " Tahmininiz giriniz : ")

        if(tahmin == uret){
            document.write("<br>" + "Tebrikler " + sayac + ". de bildiniz");
            break;
        } else if(tahmin < uret){
            hak--;
            sayac++;
            alert("Daha büyük bir sayı giriniz." + "Kalan hak : " + hak);
            
        } else if(tahmin > uret) {
            hak--;
            sayac++;
            alert("Daha küçük bir sayı giriniz"+ "Kalan hak : " + hak);
        } else{
            document.write("Hakkınız bitti.. Malesef bilemediz");
        }

    }
}

sayiTahmin();