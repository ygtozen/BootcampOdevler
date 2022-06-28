//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını
// yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

var zaman = function(){
    var tarih = new Date();
    document.write("<br>" + tarih)

    var gun = new Date().getDay();
    switch(gun){
        case 0:
            document.write("<br>" + "Pazar");
            break;
        case 1:
            document.write("<br>" + "Pazartesi");
            break;
        case 2:
            document.write("<br>" + "Salı");
            break;
        case 3:
            document.write("<br>" + "Çarşamba");
            break;
        case 4:
            document.write("<br>" + "Perşemebe");
            break;
        case 5:
            document.write("<br>" + "Cuma");
            break;
        case 6:
            document.write("<br>" + "Cumartesi");
            break;
    }
}
zaman();
