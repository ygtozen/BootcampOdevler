package com.odev;

import java.util.Scanner;

public class _20x7_VizeFinal {
	public static void main(String[] args) {
		
		// Kullanıcıdan aldığım vize final notuna göre geçme (otalama)
		// not oralaması490 kaldı
		// not oralaması 50 geçti
		// not oralaması 55 < 70 bb
		// not oralaması 70 < 84 ba
		// not oralaması 85 < 100 aa
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Vize notunuzu giriniz : ");
		int vize = scanner.nextInt();
		
		System.out.println("Final notu giriniz : ");
		int _final = scanner.nextInt();
		
		int ortalama = (vize + _final) / 2;
		
		if (ortalama < 50) {
			System.out.println("Kaldi");
		} else if (ortalama == 50) {
			System.out.println("Gecti");
		} else if (ortalama >= 55 && ortalama <= 70) {
			System.out.println("BB");
		} else if (ortalama >= 71 && ortalama <= 84) {
			System.out.println("BA");
		} else if (ortalama >= 85 && ortalama <= 100) {
			System.out.println("AA");
		} else {
			System.out.println("Geçerli not giriniz");
		}
		
	}
}
