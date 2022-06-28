//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

var sayi = Number(prompt("Bir sayı girizi : "));
function isPozitif(){
    if(sayi < 0){
        document.write("<br> " + sayi + " ==> " + "Negatif" )
    } else{
        document.write("<br> " + sayi + " ==> " + "Pozitif" )
    }
}
isPozitif();